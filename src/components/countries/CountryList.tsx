import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CircularProgress from "@mui/material/CircularProgress";

import { Link } from "react-router-dom";
import { Country } from "../types/type";
import CountryDetail from "./CountryDetail";
import { IconButton } from "@mui/material";

const url = "https://restcountries.com/v3.1/all";

type CountryListProps = {
  favourites: Country[];
  handleFavourite: (country: Country) => void;
};

export default function CountryList({
  favourites,
  handleFavourite,
}: CountryListProps) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);

  function fetchData() {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event?.target.value);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TextField
        id="outlined-basic"
        label="Search country here"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {searchTerm ? <CountryDetail name={searchTerm} /> : null}

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

                  <TableCell>
                    <IconButton onClick={() => handleFavourite(country)}>
                      <FavoriteIcon
                        sx={{
                          color: favourites.some(
                            (favCountry) =>
                              favCountry.name.common === country.name.common
                          )
                            ? "red"
                            : "inherit",
                        }}
                      />
                    </IconButton>
                    <Link to={`/countries/${country.name.common}`}>
                      <IconButton>
                        <ArrowForwardIosIcon />
                      </IconButton>
                    </Link>
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
