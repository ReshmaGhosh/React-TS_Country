import React from "react";
import { Outlet } from "react-router-dom";

function CountryDetailsPage() {
  return (
    <div>
      {/* <h2>Country Details</h2> */}
      <Outlet />
    </div>
  );
}

export default CountryDetailsPage;
