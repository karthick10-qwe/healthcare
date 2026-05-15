import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import claims from "../data/claims.json";
import ClaimCard from "../components/ClaimCard";

import bgImage from "../assets/insurance.png";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

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
          position: "relative",
        }}
      >
        {/* TITLE */}
        <Typography variant="h3" sx={{ color: "white", mb: 4 }}>
          Insurance Claim Dashboard
        </Typography>

        {/* CARDS */}
        <Grid container spacing={4} sx={{ maxWidth: "1200px" }}>
          {claims.map((claim) => (
            <Grid item xs={12} sm={6} md={4} key={claim.id}>
              <ClaimCard claim={claim} />
            </Grid>
          ))}
        </Grid>

        {/* FLOATING LOGOUT BUTTON */}
        <Button
          variant="contained"
          color="error"
          onClick={handleLogout}
          sx={{
            position: "fixed",
            bottom: 25,
            right: 25,
            borderRadius: 3,
            textTransform: "none",
            fontWeight: "bold",
            px: 3,
            py: 1.2,
            boxShadow: 4,
          }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default Dashboard;