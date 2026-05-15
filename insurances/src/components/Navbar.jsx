import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      elevation={3}
      sx={{
        background: "linear-gradient(135deg, #1976d2, #42a5f5)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <MedicalServicesIcon sx={{ fontSize: 28 }} />

          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              letterSpacing: 1,
            }}
          >
            Stackly Healthcare Insurance Tracker
          </Typography>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;