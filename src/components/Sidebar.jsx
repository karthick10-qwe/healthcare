import React from "react";

import {
 Paper,
 Typography,
 List,
 ListItem
} from "@mui/material";

const Sidebar = () => {
 return (

   <Paper sx={{ p: 2 }}>

     <Typography
       variant="h6"
       color="primary"
       gutterBottom
     >
       Dashboard
     </Typography>

     <List>

       <ListItem>
         Responsive Layout
       </ListItem>

       <ListItem>
         Material UI Design
       </ListItem>

       <ListItem>
         Status Badges
       </ListItem>

       <ListItem>
         Claim Tracking
       </ListItem>

     </List>

   </Paper>
 );
};

export default Sidebar;