import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, NavLink } from "react-router";
import "../styles/navbar.css"
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import CardMedia from "@mui/material/CardMedia";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, logOutUser } = useAuth();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    // setMobileOpen(!mobileOpen)
  };
  // handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // mobile menu drawer

  const drawer = (
    <Box>
      <Typography sx={{ textAlign: "center", padding: 2, fontWeight: "bold" }}>
        <Link to={"/"}>Blog Website</Link>
      </Typography>
      <Divider />
      <ul className="mobile-menu">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-base text-black font-bold" : "text-base font-semibold mx-2 hover:text-white"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"add-blog"}
            className={({ isActive }) =>
              isActive ? "text-base text-black font-bold" : "text-base font-semibold mx-2 hover:text-white"
            }
          >
            Add Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"all-blogs"}
            className={({ isActive }) =>
              isActive ? "text-base text-black font-bold" : "text-base font-semibold mx-2 hover:text-white"
            }
          >
            All blogs
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"featured-blogs"}
            className={({ isActive }) =>
              isActive ? "text-base text-black font-bold" : "text-base font-semibold mx-2 hover:text-white"
            }
          >
            Featured Blogs
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"wishlist"}
            className={({ isActive }) =>
              isActive ? "text-base text-black font-bold" : "text-base font-semibold mx-2 hover:text-white"
            }
          >
            Wishlist
          </NavLink>
        </li>
      </ul>
    </Box>
  );

  return (
    <Box>
      <AppBar component={"nav"}>
        <Toolbar>
          <IconButton onClick={handleDrawerToggle} color="inherit" sx={{ display: { sm: "none" }, fontSize: 22 }}>
            <MenuIcon />
          </IconButton>
          <Typography sx={{ flexGrow: 1, fontSize: 20, fontFamily: "-moz-initial", fontWeight: "bold" }}>
            <Link to={"/"}>Blog Website</Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block", fontFamily: "-moz-initial", fontSize: 18, fontWeight: "bold" } }}>
            <ul className="navigation-menu">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? "text-base text-black font-bold" : "text-base font-semibold mx-2 hover:text-white"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"all-blogs"}
                  className={({ isActive }) =>
                    isActive ? "text-base text-black font-bold" : "text-base font-semibold mx-2 hover:text-white"
                  }
                >
                  All blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"add-blog"}
                  className={({ isActive }) =>
                    isActive ? "text-base text-black font-bold" : "text-base font-semibold mx-2 hover:text-white"
                  }
                >
                  Add Blog
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"featured-blogs"}
                  className={({ isActive }) =>
                    isActive ? "text-base text-black font-bold" : "text-base font-semibold mx-2 hover:text-white"
                  }
                >
                  Featured Blogs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"wishlist"}
                  className={({ isActive }) =>
                    isActive ? "text-base text-black font-bold" : "text-base font-semibold mx-2 hover:text-white"
                  }
                >
                  Wishlist
                </NavLink>
              </li>
            </ul>
          </Box>
          <Box>
            {user ? (
              <div>
                <IconButton sx={{ color: "white" }} onClick={handleClick}>
                  <CardMedia
                    component="img"
                    sx={{ width: "40px", height: "40px", borderRadius: "50%", m: "auto" }}
                    image={user && user.photoURL ? user.photoURL : <AccountCircleIcon />}
                  />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  slotProps={{
                    list: {
                      "aria-labelledby": "basic-button",
                    },
                  }}
                >
                  <MenuItem sx={{ marginY: 0 }}>{user && user.displayName}</MenuItem>
                  <MenuItem sx={{ marginY: 0 }} onClick={logOutUser}>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              <div>
                <IconButton sx={{ color: "white" }} onClick={handleClick}>
                  <AccountCircleIcon sx={{ fontSize: 30 }} />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  slotProps={{
                    list: {
                      "aria-labelledby": "basic-button",
                    },
                  }}
                >
                  <MenuItem sx={{ marginY: 0 }} onClick={handleClose}>
                    <Link to={"login"}>Login Page</Link>
                  </MenuItem>
                  {/* <MenuItem sx={{ marginY: 0 }} onClick={logOutUser}>
                    Logout
                  </MenuItem> */}
                </Menu>
              </div>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Box component={"nav"}>
        <Toolbar>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClick={handleDrawerToggle}
            sx={{
              display: {
                xs: "block",
                sm: "none",
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: "200px",
                },
              },
            }}
          >
            {drawer}
          </Drawer>
        </Toolbar>
      </Box>
    </Box>
  );
};

export default Navbar;
