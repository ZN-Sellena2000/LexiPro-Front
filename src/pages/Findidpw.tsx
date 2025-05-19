import React from "react";
import "../design/findidpw.css";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Findidpw() {
  const navigate = useNavigate();

  return (
    <Box>
      <Button
        variant="contained"
        sx={{ m: 2, bgcolor: "#608BC1" }}
        onClick={() => navigate("/findid")}
      >
        Find ID
      </Button>
      <Button
        variant="contained"
        sx={{ m: 2, bgcolor: "#608BC1" }}
        onClick={() => navigate("/resetpw")}
      >
        Reset Password
      </Button>
    </Box>
  );
}

export default Findidpw;
