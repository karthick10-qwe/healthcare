import React from "react";

import {
 Paper,
 Typography,
 List,
 ListItem
} from "@mui/material";

const RightPanel = () => {

 return (

   <Paper sx={{ p: 2 }}>

     <Typography
       variant="h6"
       color="primary"
       gutterBottom
     >
       Features
     </Typography>

     <List>

       <ListItem>
         Responsive Design
       </ListItem>

       <ListItem>
         Timeline Stepper
       </ListItem>

       <ListItem>
         Professional UI
       </ListItem>

       <ListItem>
         Fast Performance
       </ListItem>

     </List>

   </Paper>
 );
};

export default RightPanel;