import React from "react";

import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
  Divider,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EventIcon from "@mui/icons-material/Event";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import BusinessIcon from "@mui/icons-material/Business";

const ClaimCard = ({
  claim,
  onViewDetails,
}) => {
  const getColor = () => {
    if (claim.status === "Approved")
      return "success";

    if (claim.status === "Rejected")
      return "error";

    return "warning";
  };

  return (
    <Card
      sx={{
        borderRadius: 4,
        boxShadow: 3,
        height: "100%",
        transition: "0.3s",

        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 6,
        },
      }}
    >
      <CardContent>
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <PersonIcon color="primary" />

            <Typography
              variant="h6"
              fontWeight="bold"
            >
              {claim.name}
            </Typography>
          </Box>

          <Chip
            label={claim.status}
            color={getColor()}
          />
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Claim Type */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 1.5,
          }}
        >
          <MedicalServicesIcon fontSize="small" />

          <Typography variant="body2">
            <strong>Claim Type:</strong>{" "}
            {claim.claimType}
          </Typography>
        </Box>

        {/* Amount */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 1.5,
          }}
        >
          <CurrencyRupeeIcon fontSize="small" />

          <Typography variant="body2">
            <strong>Amount:</strong>{" "}
            {claim.amount}
          </Typography>
        </Box>

        {/* Hospital */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 1.5,
          }}
        >
          <LocalHospitalIcon fontSize="small" />

          <Typography variant="body2">
            <strong>Hospital:</strong>{" "}
            {claim.hospital}
          </Typography>
        </Box>

        {/* Insurance Provider */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 1.5,
          }}
        >
          <BusinessIcon fontSize="small" />

          <Typography variant="body2">
            <strong>
              Insurance Provider:
            </strong>{" "}
            {claim.insuranceProvider}
          </Typography>
        </Box>

        {/* Date */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 3,
          }}
        >
          <EventIcon fontSize="small" />

          <Typography variant="body2">
            <strong>Date:</strong>{" "}
            {claim.date}
          </Typography>
        </Box>

        {/* Rejection Reason */}
        {claim.status ===
          "Rejected" && (
          <Box
            sx={{
              backgroundColor:
                "#ffebee",
              p: 1.5,
              borderRadius: 2,
              mb: 2,
            }}
          >
            <Typography
              variant="body2"
              color="error"
              fontWeight="bold"
            >
              Rejection Reason:
            </Typography>

            <Typography
              variant="body2"
              color="error"
            >
              {claim.rejectionReason}
            </Typography>
          </Box>
        )}

        {/* Button */}
        <Button
          variant="contained"
          fullWidth
          onClick={onViewDetails}
          sx={{
            borderRadius: 2,
            textTransform: "none",
            fontWeight: "bold",
            py: 1,
          }}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ClaimCard;