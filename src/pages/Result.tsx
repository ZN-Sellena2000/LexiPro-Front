import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../images/home.png";

function Result() {
  const navigate = useNavigate();
  const problem = "과학, 철학, 경제, 역사 등에 대한 문제를 받아와서 제시";
  var score = 0;
  var answer = "answer";
  var proofread = "proofread";
  var comment = "comment";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
      }}
    >
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
            justifyContent: "center",
            alignItems: "center",
            position: "relative", // 점수 텍스트를 absolute로 위치시키기 위해 필요
          }}
        >
          {/* Score 텍스트를 왼쪽 위로 이동 */}
          <p
            style={{
              position: "absolute",
              top: "15px",
              left: "20px",
              margin: 0,
              fontWeight: "bold",
            }}
          >
            Score
          </p>
          {/* 가운데 정렬된 점수 */}
          <h2 style={{ margin: 0, marginTop: "20px" }}>{score} / 6.0</h2>
          <Button
            variant="contained"
            sx={{ bgcolor: "#48A6A7" }}
            onClick={() => navigate("/main")}
          >
            Go To Home
          </Button>
        </Box>
      </Box>

      {/* 아래 입력창 영역 */}
      <Box sx={{ flex: 1, display: "flex" }}>
        {/* 왼쪽 절반 - Answer */}
        <Box sx={{ width: "50%", padding: 2, borderRight: "2px solid #ccc" }}>
          <h3>Answer</h3>
          <Box>{answer}</Box>
        </Box>

        {/* 오른쪽 절반 - Proofread (위) + Comment (아래) */}
        <Box sx={{ width: "50%", display: "flex", flexDirection: "column" }}>
          <Box sx={{ flex: 1, padding: 2, borderBottom: "2px solid #ccc" }}>
            <h3>Proofread</h3>
            <Box>{proofread}</Box>
          </Box>
          <Box sx={{ flex: 1, padding: 2 }}>
            <h3>Comment</h3>
            <Box>{comment}</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Result;
