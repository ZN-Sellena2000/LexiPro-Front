import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Timer from "../components/timer";

function Test() {
  const navigate = useNavigate();
  const problem = "과학, 철학, 경제, 역사 등에 대한 문제를 받아와서 제시";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
      }}
    >
      {/* 상단 질문+타이머 영역 */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "15vh",
          borderBottom: "2px solid",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            paddingLeft: "20px",
            paddingTop: "15px",
          }}
        >
          <Box
            sx={{ display: "flex", alignItems: "center", columnGap: "10px" }}
          >
            <h3 style={{ margin: 0 }}>Question</h3>
            <p style={{ margin: 0 }}>GRE 기본 문항 질문</p>
          </Box>
          <p style={{ margin: "4px 0 0 10px" }}>{problem}</p>
        </Box>
        <Box
          sx={{
            width: "25vw",
            borderLeft: "2px solid",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0px",
          }}
        >
          <Timer minutes={30} redirectTo="/result" />
          <Button
            variant="contained"
            sx={{ width: "100%", height: "7vh", bgcolor: "#48A6A7" }}
            onClick={() => navigate("/result")}
          >
            Submit
          </Button>
        </Box>
      </Box>

      {/* 아래 입력창 영역 */}
      <Box sx={{ flex: 1, overflow: "auto" }}>
        <TextField
          multiline
          fullWidth
          placeholder="답안을 입력하세요..."
          variant="outlined"
          sx={{
            bgcolor: "#ffffff",
            height: "100%",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none", // ← 회색 테두리 제거
              },
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default Test;
