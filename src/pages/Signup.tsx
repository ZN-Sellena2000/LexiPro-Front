import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function Signup() {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [isIdValid, setIsIdValid] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [scoreGoal, setScoreGoal] = useState("");
  const [scoreError, setScoreError] = useState("");

  const [email, setEmail] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  useEffect(() => {
    setPasswordMatch(password !== "" && password === passwordConfirm);
  }, [password, passwordConfirm]);

  const validateScoreGoal = (value: string) => {
    const num = parseFloat(value);
    if (value === "" || (num >= 0 && num <= 6 && Number.isInteger(num * 2))) {
      setScoreGoal(value);
      setScoreError("");
    } else {
      setScoreGoal("");
      setScoreError("⚠️ 0에서 6 사이의 0.5 단위 숫자를 입력해 주세요.");
    }
  };

  const handleSignup = () => {
    if (!isIdValid) return alert("ID 중복 확인을 해주세요.");
    if (!passwordMatch) return alert("비밀번호가 일치하지 않습니다.");
    if (scoreGoal === "") return alert("Score Goal을 입력해 주세요.");
    if (!isEmailVerified) return alert("이메일 인증을 완료해 주세요.");

    alert("회원가입이 완료되었습니다.");
    navigate("/login");
  };

  return (
    <Box sx={{ p: 2 }}>
      {/* ID 입력 및 중복 확인 */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <TextField
          label="ID"
          variant="filled"
          sx={{ bgcolor: "#CBDCEB", mr: 2, width: "25ch" }}
          value={id}
          onChange={(e) => {
            setId(e.target.value);
            setIsIdValid(false); // 입력이 바뀌면 다시 확인 필요
          }}
        />
        <Button
          variant="contained"
          sx={{ bgcolor: "#608BC1" }}
          onClick={() => {
            // ID 중복 확인 로직 (예시)
            if (id.trim() !== "") {
              setIsIdValid(true);
              alert("ID 사용 가능합니다.");
            } else {
              alert("ID를 입력해 주세요.");
            }
          }}
        >
          Duplication Check
        </Button>
      </Box>

      {/* 비밀번호 */}
      <TextField
        label="Password"
        variant="filled"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ bgcolor: "#CBDCEB", width: "100%", mb: 2 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword((prev) => !prev)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Password Validation"
        variant="filled"
        type="password"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
        sx={{ bgcolor: "#CBDCEB", width: "100%" }}
      />
      {passwordConfirm && (
        <Typography sx={{ ml: 1, color: passwordMatch ? "green" : "red" }}>
          {passwordMatch ? "Password Matched!" : "Password does not Matched."}
        </Typography>
      )}

      {/* Score Goal */}
      <Box sx={{ mt: 3, display: "flex", alignItems: "center" }}>
        <Typography sx={{ mr: 2 }}>Score Goal</Typography>
        <TextField
          type="number"
          variant="filled"
          inputProps={{ step: 0.5, min: 0, max: 6 }}
          sx={{ width: "15vw", bgcolor: "#CBDCEB" }}
          value={scoreGoal}
          onChange={(e) => validateScoreGoal(e.target.value)}
        />
        {scoreError && (
          <Typography sx={{ ml: 2, color: "red" }}>{scoreError}</Typography>
        )}
      </Box>

      {/* 이메일 */}
      <Box sx={{ display: "flex", alignItems: "center", mt: 4 }}>
        <TextField
          label="E-mail"
          variant="filled"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setIsEmailVerified(false);
          }}
          sx={{ bgcolor: "#CBDCEB", mr: 2, width: "40vw" }}
        />
        <Button
          variant="contained"
          sx={{ bgcolor: "#608BC1" }}
          onClick={() => {
            if (email.includes("@")) {
              setIsEmailVerified(true);
              alert("이메일이 전송되었습니다.");
            } else {
              alert("올바른 이메일을 입력해 주세요.");
            }
          }}
        >
          E-mail Validation
        </Button>
      </Box>

      {/* 회원가입 버튼 */}
      <Button
        variant="contained"
        sx={{ mt: 4, bgcolor: "#608BC1" }}
        onClick={handleSignup}
      >
        Sign Up
      </Button>
    </Box>
  );
}

export default Signup;
