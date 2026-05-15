import React from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Alert,
  Divider,
} from "@mui/material";

import { useParams } from "react-router-dom";

import ClaimStepper from "../components/ClaimStepper";
import claims from "../data/claims.json";

const ClaimTimeline = () => {
  const { id } = useParams();

  // find correct claim based on URL
  const selectedClaim = claims.find(
    (c) => String(c.id) === String(id)
  );

  if (!selectedClaim) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="error">
          Claim not found
        </Alert>
      </Box>
    );
  }

  const renderStatusAlert = () => {
    switch (selectedClaim.status) {
      case "Approved":
        return (
          <Alert severity="success" sx={{ mt: 3 }}>
            Claim Approved Successfully
          </Alert>
        );

      case "Pending":
        return (
          <Alert severity="warning" sx={{ mt: 3 }}>
            Claim Under Review
          </Alert>
        );

      case "Rejected":
        return (
          <Alert severity="error" sx={{ mt: 3 }}>
            Rejection Reason: {selectedClaim.rejectionReason}
          </Alert>
        );

      default:
        return null;
    }
  };

  return (
    <Box mt={5} sx={{ px: 3 }}>
      {/* PAGE TITLE */}
      <Typography variant="h4" mb={3} fontWeight="bold">
        Claim Timeline Page
      </Typography>

      <Grid container spacing={3}>
        {/* LEFT SIDE - DETAILS */}
        <Grid item xs={12} md={4}>
          <Paper
            elevation={5}
            sx={{
              p: 3,
              borderRadius: 4,
              background: "rgba(255,255,255,0.92)",
            }}
          >
            <Typography variant="h5" fontWeight="bold" mb={3}>
              {selectedClaim.name}
            </Typography>

            <Typography>
              <strong>Claim Type:</strong>{" "}
              {selectedClaim.claimType}
            </Typography>

            <Typography>
              <strong>Amount:</strong>{" "}
              {selectedClaim.amount}
            </Typography>

            <Typography>
              <strong>Hospital:</strong>{" "}
              {selectedClaim.hospital}
            </Typography>

            <Typography>
              <strong>Insurance Provider:</strong>{" "}
              {selectedClaim.insuranceProvider}
            </Typography>

            <Typography>
              <strong>Status:</strong>{" "}
              <span
                style={{
                  color:
                    selectedClaim.status === "Approved"
                      ? "green"
                      : selectedClaim.status === "Pending"
                      ? "orange"
                      : "red",
                  fontWeight: "bold",
                }}
              >
                {selectedClaim.status}
              </span>
            </Typography>

            <Typography>
              <strong>Date:</strong>{" "}
              {selectedClaim.date}
            </Typography>

            {renderStatusAlert()}
          </Paper>
        </Grid>

        {/* RIGHT SIDE - TIMELINE */}
        <Grid item xs={12} md={8}>
          <Paper
            elevation={5}
            sx={{
              p: 3,
              borderRadius: 4,
              background: "rgba(255,255,255,0.92)",
            }}
          >
            <Typography variant="h5" fontWeight="bold" mb={3}>
              Claim Progress Timeline
            </Typography>

            <ClaimStepper
              status={selectedClaim.status}
              currentStep={selectedClaim.currentStep}
            />

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" fontWeight="bold" mb={2}>
              Activity History
            </Typography>

            {selectedClaim.timeline?.map((item, index) => (
              <Box
                key={index}
                sx={{
                  mb: 2,
                  p: 2,
                  borderLeft: "4px solid #1976d2",
                  bgcolor: "#f5f5f5",
                  borderRadius: 2,
                }}
              >
                <Typography fontWeight="bold">
                  {item.step}
                </Typography>

                <Typography variant="body2">
                  Date: {item.date}
                </Typography>

                <Typography variant="body2">
                  Time: {item.time}
                </Typography>
              </Box>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ClaimTimeline;