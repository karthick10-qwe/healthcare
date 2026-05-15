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

import { useNavigate } from "react-router-dom";

import PersonIcon from "@mui/icons-material/Person";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import EventIcon from "@mui/icons-material/Event";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import BusinessIcon from "@mui/icons-material/Business";

const ClaimCard = ({ claim }) => {
  const navigate = useNavigate();

  const getColor = () => {
    if (claim.status === "Approved") return "success";
    if (claim.status === "Rejected") return "error";
    return "warning";
  };

  const InfoRow = ({ icon, label, value }) => (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.2 }}>
      {icon}
      <Typography variant="body2">
        <strong>{label}:</strong> {value}
      </Typography>
    </Box>
  );

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 320,
        borderRadius: 4,
        boxShadow: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 8,
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        {/* HEADER */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <PersonIcon color="primary" />
            <Typography variant="h6" fontWeight="bold">
              {claim.name}
            </Typography>
          </Box>

          <Chip
            label={claim.status}
            color={getColor()}
            size="small"
            sx={{ fontWeight: "bold" }}
          />
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* DETAILS */}
        <InfoRow
          icon={<MedicalServicesIcon fontSize="small" />}
          label="Type"
          value={claim.claimType}
        />
        <InfoRow
          icon={<CurrencyRupeeIcon fontSize="small" />}
          label="Amount"
          value={claim.amount}
        />
        <InfoRow
          icon={<LocalHospitalIcon fontSize="small" />}
          label="Hospital"
          value={claim.hospital}
        />
        <InfoRow
          icon={<BusinessIcon fontSize="small" />}
          label="Provider"
          value={claim.insuranceProvider}
        />
        <InfoRow
          icon={<EventIcon fontSize="small" />}
          label="Date"
          value={claim.date}
        />
      </CardContent>

      {/* BUTTON */}
      <Box sx={{ p: 2 }}>
        <Button
          variant="contained"
          fullWidth
          onClick={() => navigate(`/timeline/${claim.id}`)}
          sx={{
            borderRadius: 2,
            textTransform: "none",
            fontWeight: "bold",
          }}
        >
          View Details
        </Button>
      </Box>
    </Card>
  );
};

export default ClaimCard;