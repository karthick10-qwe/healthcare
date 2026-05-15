import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import bgImage from "../assets/insurance.png";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      setError("Please enter username and password");
      return;
    }

    if (username === "Karthick" && password === "7787@qwe") {
      navigate("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* DARK OVERLAY */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.55)",
        }}
      />

      {/* LOGIN CARD */}
      <Paper
        elevation={12}
        sx={{
          position: "relative",
          zIndex: 2,
          width: 380,
          p: 5,
          borderRadius: 5,
          background: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(10px)",
          textAlign: "center",
        }}
      >
        {/* TITLE */}
        <Typography variant="h4" fontWeight="bold" mb={1}>
          Stackly
        </Typography>

        <Typography
          variant="subtitle1"
          color="text.secondary"
          mb={3}
        >
          Healthcare Insurance Tracker
        </Typography>

        {/* INPUTS */}
        <TextField
          fullWidth
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 2 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* ERROR */}
        {error && (
          <Typography
            color="error"
            fontSize={14}
            mb={2}
            fontWeight="bold"
          >
            {error}
          </Typography>
        )}

        {/* BUTTON */}
        <Button
          fullWidth
          variant="contained"
          onClick={handleLogin}
          sx={{
            py: 1.3,
            fontWeight: "bold",
            borderRadius: 3,
            textTransform: "none",
            background: "linear-gradient(135deg, #1976d2, #42a5f5)",
            "&:hover": {
              background: "linear-gradient(135deg, #1565c0, #1e88e5)",
            },
          }}
        >
          Login
        </Button>

        {/* HINT */}
        <Typography variant="caption" display="block" mt={2}>
          Hint: name / 1234
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;