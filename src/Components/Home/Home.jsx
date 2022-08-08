import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {
  NavLink,
  Outlet,
  Link,
  useMatch,
  useResolvedPath,
} from "react-router-dom";
import {
  AccountCircle,
  AddCircle,
  AdminPanelSettings,
  Logout,
  ProductionQuantityLimits,
  ShoppingBag,
} from "@mui/icons-material";
import useAuth from "../../hooks/useAuth";

const drawerWidth = 240;

const Home = () => {
  const { user, logOut } = useAuth();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" noWrap component="div">
            Korean Shop Bangladesh Admin Panel
          </Typography>
          <Typography variant="h6" noWrap component="div">
            {user.displayName}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <NavLink to="/manageProducts" style={{ textDecoration: "none" }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ProductionQuantityLimits />
                </ListItemIcon>
                <ListItemText primary="Manage Products" />
              </ListItemButton>
            </ListItem>
          </NavLink>

          <NavLink to="/addNewProduct" style={{ textDecoration: "none" }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText primary="Add New Products" />
              </ListItemButton>
            </ListItem>
          </NavLink>
          <NavLink to="/manageOrders" style={{ textDecoration: "none" }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ShoppingBag />
                </ListItemIcon>
                <ListItemText primary="Orders" />
              </ListItemButton>
            </ListItem>
          </NavLink>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="Users" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AdminPanelSettings />
              </ListItemIcon>
              <ListItemText primary="Admin Panel" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            onClick={() => {
              logOut();
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="LogOut" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        {/* <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Home;
