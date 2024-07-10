import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { SidebarData } from "./SidebarData";

function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor:  ' #060b26'}}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={showSidebar}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          
          </Typography>
          <Link to="/login" className="login-button">
            <LoginIcon />
          </Link>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={sidebar} onClose={showSidebar} >
        <div>
          <IconButton onClick={showSidebar} sx={{ marginLeft: 'auto' }}>
            <CloseIcon />
          </IconButton>
          <List>
            {SidebarData.map((item, index) => (
              <ListItem button key={index} component={Link} to={item.path} onClick={showSidebar}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
}

export default Header;
