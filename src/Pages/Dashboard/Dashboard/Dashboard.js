import MenuIcon from "@mui/icons-material/Menu";
import { Button, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";
import * as React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const drawerWidth = 210;

function Dashboard(props) {
  const { user, admin, logOut } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <NavLink style={{ textDecoration: "none" }} to={"/"}>
        <Button color="inherit" sx={{ m: 3 }}>
          <i className="mx-2 fas fa-house-user"></i> Home
        </Button>
      </NavLink>
      <br />
      <img
        src={user.photoURL}
        alt=""
        className="mb-3"
        style={{
          borderRadius: "50%",
          border: "1px solid lightGray",
          boxShadow: "5px 5px 5px gray",
          marginLeft: "30px",
          width: "100px",
          height: "100px",
        }}
      />
      <h5 className="text-center">{user.displayName}</h5>
      <Divider />
      <NavLink style={{ textDecoration: "none" }} to="/dashboard">
        <Button color="inherit">
          <i className="mx-2 fas fa-columns"></i> Dashboard
        </Button>
      </NavLink>
      <Divider />
      {!admin && (
        <Box>
          <NavLink style={{ textDecoration: "none" }} to="/dashboard/myorders">
            <Button color="inherit">
              {" "}
              <i className="mx-2 fas fa-shopping-cart"></i> My All Orders
            </Button>
          </NavLink>{" "}
          <Divider />
          <NavLink style={{ textDecoration: "none" }} to="/dashboard/payment">
            <Button color="inherit">
              {" "}
              <i className="mx-2 fas fa-money-check-alt"></i> Payments
            </Button>
          </NavLink>{" "}
          <Divider />
          <NavLink style={{ textDecoration: "none" }} to="/dashboard/addreview">
            <Button color="inherit">
              <i className="mx-2 far fa-star"></i> Add Review
            </Button>
          </NavLink>
        </Box>
      )}

      <Divider />
      {admin && (
        <Box>
          <NavLink style={{ textDecoration: "none" }} to="/dashboard/makeadmin">
            <Button color="inherit">
              <i className="mx-2 fas fa-user-plus"></i> Make Admin
            </Button>
          </NavLink>{" "}
          <Divider />
          <NavLink
            style={{ textDecoration: "none" }}
            to="/dashboard/addproduct"
          >
            <Button color="inherit">
              <i className="mx-2 fab fa-product-hunt"></i> Add Product
            </Button>
          </NavLink>{" "}
          <Divider />
          <NavLink
            style={{ textDecoration: "none" }}
            to="/dashboard/manageallorder"
          >
            <Button color="inherit">
              <i className="mx-2 fas fa-tasks"></i> Manage All Order
            </Button>
          </NavLink>{" "}
          <Divider />
          <NavLink
            style={{ textDecoration: "none" }}
            to="/dashboard/manageallproducts"
          >
            <Button color="inherit">
              <i className="mx-2 fas fa-sitemap"></i> Manage Products
            </Button>
          </NavLink>
          <Divider />
        </Box>
      )}
      <NavLink style={{ textDecoration: "none" }} to={"/"}>
        <Button color="inherit" onClick={logOut}>
          <i className="mx-2 fas fa-sign-out-alt"></i> Log Out
        </Button>
      </NavLink>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Outlet></Outlet>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
