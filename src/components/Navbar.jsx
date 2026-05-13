import React from "react";

import {
 AppBar,
 Toolbar,
 Typography
} from "@mui/material";

import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

const Navbar = () => {
 return (
   <AppBar position="static">
     <Toolbar>

       <MedicalServicesIcon sx={{ mr: 2 }} />

       <Typography variant="h6">
         Stackly Healthcare Insurance Tracker
       </Typography>

     </Toolbar>
   </AppBar>
 );
};

export default Navbar;