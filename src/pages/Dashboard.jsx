import React, { useState } from "react";

import {
  Box,
  Grid,
  Typography,
  Paper,
  Alert,
} from "@mui/material";

import claims from "../data/claims.json";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import RightPanel from "../components/RightPanel";
import ClaimCard from "../components/ClaimCard";
import ClaimStepper from "../components/ClaimStepper";

const Dashboard = () => {
  const [selectedClaim, setSelectedClaim] =
    useState(null);

  return (
    <Box
      sx={{
        backgroundColor: "#f4f6f8",
        minHeight: "100vh",
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Container */}
      <Box sx={{ p: 3 }}>
        {/* Page Title */}
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={4}
        >
          Insurance Claim Dashboard
        </Typography>

        {/* Dashboard Layout */}
        <Grid
          container
          spacing={3}
          sx={{
            alignItems: "flex-start",
          }}
        >
          {/* Sidebar */}
          <Grid item xs={12} md={2}>
            <Sidebar />
          </Grid>

          {/* Claim Cards */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              {claims.map((claim) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  lg={4}
                  key={claim.id}
                >
                  <ClaimCard
                    claim={claim}
                    onViewDetails={() =>
                      setSelectedClaim(claim)
                    }
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Right Panel */}
          <Grid item xs={12} md={2}>
            <RightPanel />
          </Grid>
        </Grid>

        {/* Selected Claim Details */}
        {selectedClaim && (
          <Box mt={5}>
            <Grid container spacing={3}>
              {/* Claim Details */}
              <Grid item xs={12} md={4}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    borderRadius: 4,
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    mb={3}
                  >
                    {selectedClaim.name}
                  </Typography>

                  <Typography mb={1}>
                    <strong>Claim Type:</strong>{" "}
                    {selectedClaim.claimType}
                  </Typography>

                  <Typography mb={1}>
                    <strong>Amount:</strong>{" "}
                    {selectedClaim.amount}
                  </Typography>

                  <Typography mb={1}>
                    <strong>Hospital:</strong>{" "}
                    {selectedClaim.hospital}
                  </Typography>

                  <Typography mb={1}>
                    <strong>
                      Insurance Provider:
                    </strong>{" "}
                    {
                      selectedClaim.insuranceProvider
                    }
                  </Typography>

                  <Typography mb={1}>
                    <strong>Status:</strong>{" "}
                    {selectedClaim.status}
                  </Typography>

                  <Typography mb={1}>
                    <strong>Date:</strong>{" "}
                    {selectedClaim.date}
                  </Typography>

                  {/* Approved */}
                  {selectedClaim.status ===
                    "Approved" && (
                    <Alert
                      severity="success"
                      sx={{ mt: 3 }}
                    >
                      Claim Approved Successfully
                    </Alert>
                  )}

                  {/* Pending */}
                  {selectedClaim.status ===
                    "Pending" && (
                    <Alert
                      severity="warning"
                      sx={{ mt: 3 }}
                    >
                      Claim Under Review
                    </Alert>
                  )}

                  {/* Rejected */}
                  {selectedClaim.status ===
                    "Rejected" && (
                    <Alert
                      severity="error"
                      sx={{ mt: 3 }}
                    >
                      Rejection Reason:{" "}
                      {
                        selectedClaim.rejectionReason
                      }
                    </Alert>
                  )}
                </Paper>
              </Grid>

              {/* Claim Timeline */}
              <Grid item xs={12} md={8}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    borderRadius: 4,
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    mb={3}
                  >
                    Claim Progress Timeline
                  </Typography>

                  <ClaimStepper
                    status={selectedClaim.status}
                    currentStep={
                      selectedClaim.currentStep
                    }
                  />
                </Paper>
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Dashboard;