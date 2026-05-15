import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import claims from "../data/claims.json";
import ClaimCard from "../components/ClaimCard";

import bgImage from "../assets/insurance.png";

const Dashboard = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          minHeight: "100vh",
          background: "rgba(0,0,0,0.45)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: 3,
          py: 4,
        }}
      >
        <Typography variant="h3" sx={{ color: "white", mb: 4 }}>
          Insurance Claim Dashboard
        </Typography>

        <Grid container spacing={4} sx={{ maxWidth: "1200px" }}>
          {claims.map((claim) => (
            <Grid item xs={12} sm={6} md={4} key={claim.id}>
              <ClaimCard claim={claim} />
            </Grid>
          ))}
        </Grid>

      </Box>
    </Box>
  );
};

export default Dashboard;