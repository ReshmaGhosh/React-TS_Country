import React from "react";
import "./styles/NavBar.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import PublicIcon from "@mui/icons-material/Public";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import DetailsIcon from "@mui/icons-material/Details";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { Country } from "./types/type";

function MenuAppBar({ favourites }: { favourites: Country[] }) {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <div className="container">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
            >
              <MenuOutlinedIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              COUNTRIES
            </Typography>
          </div>

          <div>
            <IconButton color="inherit">
              <Link to="/" style={{ textDecoration: "none" }}>
                <HomeIcon sx={{ fontSize: "30px", color: "white" }} />
              </Link>
            </IconButton>

            <IconButton color="inherit">
              <Link to="/countries" style={{ textDecoration: "none" }}>
                <PublicIcon sx={{ fontSize: "30px", color: "white" }} />
              </Link>
            </IconButton>

            <IconButton color="inherit">
              <Link to="/countrydetails" style={{ textDecoration: "none" }}>
                <DetailsIcon sx={{ fontSize: "30px", color: "white" }} />
              </Link>
            </IconButton>

            <IconButton color="inherit">
              <Badge
                badgeContent={favourites.length}
                color="secondary"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <Link to="/favourites" style={{ textDecoration: "none" }}>
                  <FavoriteIcon sx={{ fontSize: "30px", color: "white" }} />
                </Link>
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
function NavBar() {
  return <div>NavBar</div>;
}

export default MenuAppBar;
