import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>

        <MedicalServicesIcon sx={{ mr: 2 }} />

        <Typography sx={{ flexGrow: 1 }}>
          Stackly Healthcare Insurance Tracker
        </Typography>

        <Box>
          <Button color="inherit" component={Link} to="/">
            Dashboard
          </Button>

          <Button color="inherit" component={Link} to="/timeline">
            Timeline
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;