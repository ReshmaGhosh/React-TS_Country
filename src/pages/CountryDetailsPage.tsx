import React from "react";
import { Outlet } from "react-router-dom";

function CountryDetailsPage() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default CountryDetailsPage;
