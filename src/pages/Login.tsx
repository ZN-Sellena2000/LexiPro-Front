import { useState } from "react";
import "../design/login.css";
import { Box, TextField, Button } from "@mui/material";
import Password from "../components/password";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // 여기서 로그인 로직을 수행할 수 있음
    console.log("ID:", id);
    console.log("Password:", password);

    // 예시: 조건 체크 후 페이지 이동
    if (id && password) {
      navigate("/main");
    } else {
      alert("ID와 비밀번호를 모두 입력해주세요.");
    }
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        <div>
          <TextField
            id="outlined-basic"
            label="ID"
            sx={{ m: 1, width: "25ch", bgcolor: "#CBDCEB" }}
            variant="filled"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <Password
            field_name="Password"
            width="25ch"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <Button
            variant="contained"
            sx={{ m: 1, bgcolor: "#608BC1" }}
            onClick={handleLogin}
          >
            Sign In
          </Button>
        </div>
        <div className="link">
          <a
            href="/signup"
            onClick={() => setClicked(true)}
            style={{ color: clicked ? "#608BC1" : "#48A6A7" }}
          >
            Sign up
          </a>
          <a
            href="/findidpw"
            onClick={() => setClicked(true)}
            style={{ color: clicked ? "#608BC1" : "#48A6A7" }}
          >
            Find ID/Password
          </a>
        </div>
      </div>
    </Box>
  );
}

export default Login;
