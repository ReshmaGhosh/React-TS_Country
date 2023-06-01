// import React, { useEffect, useState } from "react";

// import { Country } from "../types/type";

// const url = "https://restcountries.com/v3.1/all";

// export default function CountryList() {
//   const [countries, setCountries] = useState<Country[]>([]);
//   const [page, setPage] = useState(0);
//   const rowsPerPage = 10;

//   function fetchData() {
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => setCountries(data))
//       .catch((error) => console.log(error));
//   }
//   console.log(countries);
//   useEffect(() => {
//     fetchData();
//   }, []);
//   const handleChangePage = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setPage(+event.target.value);
//   };

//   return (
//     <div>
//       <input
//         type="number"
//         value={page}
//         onChange={handleChangePage}
//         min={0}
//         max={Math.ceil(countries.length / rowsPerPage)}
//       />
//       <table>
//         <thead>
//           <tr>
//             <th>Flag</th>
//             <th>Name</th>
//             <th>Region</th>
//             <th>Population</th>
//             <th>Languages</th>
//             {/* <th>Capital</th>
//             <th>Borders</th>
//             <th>Area</th>
//             <th>Timezones</th>
//             <th>Continents</th> */}
//           </tr>
//         </thead>
//         <tbody>
//           {countries
//             .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//             .map((country) => (
//               <tr key={country.name.common}>
//                 <td>
//                   <img src={country.flags.png} alt={country.name.common} />
//                 </td>
//                 <td>{country.name.common}</td>
//                 <td>{country.region}</td>
//                 <td>{country.population}</td>
//                 <td>
//                   {country.languages
//                     ? Object.values(country.languages).join(", ")
//                     : ""}
//                 </td>

//                 {/* <td>{country.area}</td>

//                 <td>
//                   {country.capital && Array.isArray(country.capital)
//                     ? country.capital.join(", ")
//                     : ""}
//                 </td>
//                 <td>
//                   {country.borders && Array.isArray(country.borders)
//                     ? country.borders.join(", ")
//                     : ""}
//                 </td>
//                 <td>
//                   {country.timezones && Array.isArray(country.timezones)
//                     ? country.timezones.join(", ")
//                     : ""}
//                 </td>
//                 <td>
//                   {country.continents && Array.isArray(country.continents)
//                     ? country.continents.join(", ")
//                     : ""}
//                 </td> */}
//               </tr>
//             ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import { Country } from "../types/type";

const url = "https://restcountries.com/v3.1/all";

export default function CountryList() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  function fetchData() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  // const handleChangeRowsPerPage = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Flag</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Region</TableCell>
              <TableCell>Population</TableCell>
              <TableCell>Languages</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {countries
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((country) => (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={country.name.common}
                >
                  <TableCell>
                    <img src={country.flags.png} alt={country.name.common} />
                  </TableCell>
                  <TableCell>{country.name.common}</TableCell>
                  <TableCell>{country.region}</TableCell>
                  <TableCell>{country.population}</TableCell>
                  <TableCell>
                    {/* {country.languages
                      ? Object.values(country.languages).join(", ")
                      : ""} */}
                    {country.languages
                      ? Object.values(country.languages).map(
                          (language, index) => (
                            <div key={index}>
                              <li>{language}</li>
                            </div>
                          )
                        )
                      : ""}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={countries.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
