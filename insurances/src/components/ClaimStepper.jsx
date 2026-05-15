import React from "react";

import {
  Stepper,
  Step,
  StepLabel,
  Paper,
  Typography,
  Box,
  Alert,
} from "@mui/material";

const ClaimStepper = ({
  status,
  currentStep,
  rejectionReason,
}) => {

  const steps = [
    "Claim Submitted",
    "Documents Verified",
    "Under Review",
    status === "Rejected"
      ? "Rejected"
      : "Approved",
    "Payment Processed",
  ];

  return (
    <Paper
      sx={{
        p: 4,
        borderRadius: 4,
        boxShadow: 3,
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={4}
      >
        Claim Progress Timeline
      </Typography>

      <Box sx={{ overflowX: "auto" }}>
        <Stepper
          activeStep={currentStep - 1}
          alternativeLabel
        >
          {steps.map((label, index) => {

            const isRejected =
              status === "Rejected" &&
              label === "Rejected";

            const isApproved =
              status === "Approved" &&
              label === "Approved";

            const isUnderReview =
              status === "Pending" &&
              label === "Under Review";

            return (
              <Step key={index}>
                <StepLabel
                  sx={{
                    "& .MuiStepLabel-label": {
                      fontWeight: "bold",

                      color: isRejected
                        ? "#d32f2f"
                        : isApproved
                        ? "#2e7d32"
                        : isUnderReview
                        ? "#ed6c02"
                        : "#555",
                    },

                    "& .MuiStepIcon-root": {
                      color: isRejected
                        ? "#d32f2f"
                        : isApproved
                        ? "#2e7d32"
                        : isUnderReview
                        ? "#ed6c02"
                        : "#bdbdbd",
                    },

                    "& .Mui-active": {
                      color: isRejected
                        ? "#d32f2f"
                        : isApproved
                        ? "#2e7d32"
                        : "#1976d2",
                    },

                    "& .Mui-completed": {
                      color:
                        status === "Rejected"
                          ? "#d32f2f"
                          : "#2e7d32",
                    },
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>

      {/* Approved */}
      {status === "Approved" && (
        <Alert
          severity="success"
          sx={{ mt: 4 }}
        >
          Claim Approved Successfully
        </Alert>
      )}

      {/* Pending */}
      {status === "Pending" && (
        <Alert
          severity="warning"
          sx={{ mt: 4 }}
        >
          Claim Under Review
        </Alert>
      )}

      {/* Rejected */}
      {status === "Rejected" && (
        <Alert
          severity="error"
          sx={{ mt: 4 }}
        >
          Rejection Reason: {rejectionReason}
        </Alert>
      )}
    </Paper>
  );
};

export default ClaimStepper;