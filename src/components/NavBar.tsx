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
// import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { Link } from "react-router-dom";

// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";

function MenuAppBar() {
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
      {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? "Logout" : "Login"}
        />
      </FormGroup> */}
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
              <Link to="/favourites" style={{ textDecoration: "none" }}>
                <FavoriteIcon sx={{ fontSize: "30px", color: "white" }} />
              </Link>
            </IconButton>
          </div>

          {/* {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              ></IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )} */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
function NavBar() {
  return <div>NavBar</div>;
}

export default MenuAppBar;
