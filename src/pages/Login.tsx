import * as React from "react";
import "../design/login.css";
import { Box, TextField, Button } from "@mui/material";
import Password from "../components/password";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        <div>
          <TextField
            id="outlined-basic"
            label="ID"
            sx={{ m: 1, width: "25ch", bgcolor: "#CBDCEB" }}
            variant="filled"
          />
        </div>
        <div>
          <Password />
        </div>
        <div>
          <Button
            variant="contained"
            sx={{ m: 1, bgcolor: "#608BC1" }}
            onClick={() => navigate("/main")}
          >
            Sign In
          </Button>
        </div>
        <div className="link">
          <a href="/signup">Sign up</a>
          <a href="/findidpw">Find ID/Password</a>
        </div>
      </div>
    </Box>
  );
}

export default Login;
