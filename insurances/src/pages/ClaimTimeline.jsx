import React from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Alert,
  Divider,
  Button,
} from "@mui/material";

import { useParams, useNavigate } from "react-router-dom";
import ClaimStepper from "../components/ClaimStepper";
import claims from "../data/claims.json";
import bgImage from "../assets/insurance.png";

const ClaimTimeline = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedClaim = claims.find(
    (c) => String(c.id) === String(id)
  );

  if (!selectedClaim) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="error">Claim not found</Alert>
      </Box>
    );
  }

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
      {/* DARK OVERLAY */}
      <Box
        sx={{
          minHeight: "100vh",
          background: "rgba(0,0,0,0.45)",
          px: 3,
          py: 4,
        }}
      >
        {/* DASHBOARD STYLE HEADING */}
        <Typography
          variant="h3"
          sx={{
            color: "white",
            mb: 4,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Insurance Claim Timeline
        </Typography>

        {/* BACK BUTTON */}
        <Button
          variant="contained"
          onClick={() => navigate("/dashboard")}
          sx={{
            mb: 3,
            borderRadius: 2,
            textTransform: "none",
            fontWeight: "bold",
          }}
        >
          ← Back to Dashboard
        </Button>

        <Grid container spacing={3}>
          {/* LEFT PANEL */}
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
                <strong>Claim Type:</strong> {selectedClaim.claimType}
              </Typography>

              <Typography>
                <strong>Amount:</strong> {selectedClaim.amount}
              </Typography>

              <Typography>
                <strong>Hospital:</strong> {selectedClaim.hospital}
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
                <strong>Date:</strong> {selectedClaim.date}
              </Typography>

              {/* REJECTION REASON ONLY HERE */}
              {selectedClaim.status === "Rejected" &&
                selectedClaim.rejectionReason && (
                  <Alert severity="error" sx={{ mt: 3 }}>
                    <strong>Rejection Reason:</strong>{" "}
                    {selectedClaim.rejectionReason}
                  </Alert>
                )}
            </Paper>
          </Grid>

          {/* RIGHT PANEL */}
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
    </Box>
  );
};

export default ClaimTimeline;