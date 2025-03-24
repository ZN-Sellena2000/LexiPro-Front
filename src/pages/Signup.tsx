import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  return (
    <Box>
      <Button
        variant="contained"
        sx={{ m: 2 }}
        onClick={() => navigate("/login")}
      >
        Sign Up
      </Button>
    </Box>
  );
}

export default Signup;
