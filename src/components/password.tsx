import * as React from "react";
import "../design/login.css";
import {
  Box,
  IconButton,
  FilledInput,
  InputLabel,
  InputAdornment,
  FormControl,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface PasswordProps {
  field_name: string;
  width: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Password({ field_name, width, value, onChange }: PasswordProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <FormControl
        sx={{ m: 1, width: width, bgcolor: "#CBDCEB" }}
        variant="filled"
      >
        <InputLabel htmlFor="filled-adornment-password">
          {field_name}
        </InputLabel>
        <FilledInput
          id="filled-adornment-password"
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={showPassword ? "hide password" : "show password"}
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
}

export default Password;
