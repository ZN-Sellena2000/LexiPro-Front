import React from "react";
import { Avatar, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../design/main.css";
import profile_default from "../images/profile_default.png";

//Box 컴포넌트 사용해서 리팩토링 필요

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

function Main() {
  const navigate = useNavigate();
  var user_name = "Test User";
  var profile = null;
  var score = 0;
  var solved = 0;
  var total = 0;
  profile = profile_default;

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div className="body-contents">
        <div className="profile">
          <div className="profile-child">
            <Avatar
              src={profile || undefined}
              {...(profile ? {} : stringAvatar(user_name))}
              sx={{ width: 100, height: 100 }}
            />
          </div>
          <div className="profile-child">
            <p>Name : {user_name}</p>
            <p>Score : {score}</p>
          </div>
        </div>
        <h2>
          {solved}/{total}
        </h2>
        <Button
          variant="contained"
          sx={{ m: 2 }}
          onClick={() => navigate("/test")}
        >
          문제 풀기
        </Button>
        <Button
          variant="contained"
          sx={{ m: 2 }}
          onClick={() => navigate("/statistics")}
        >
          과거 기록 보기
        </Button>
      </div>
    </Box>
  );
}

export default Main;
