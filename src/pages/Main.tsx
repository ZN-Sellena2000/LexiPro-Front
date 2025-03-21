import React from "react";
import { Avatar, Button } from "@mui/material";
import "../design/main.css";
import profile_default from "../images/profile_default.png";

//Avatar tag 사용할 때 alt 값에는 사용자 이름/닉네임이 들어가도록 설정할 것.
//alt 값에 기본 프로필을 넣는게 좋지 않을까 했는데 기본 프로필 보다 사용자 정보로 아이콘 생성하는 쪽이 더 좋아보임.
//alt 값이 적용되는 프로필은 무조건 사용자 이름의 첫 글자로 적용
// 배경 색은 회색
// "Test User"인 경우 : T
// "테스트 사용자"인 경우 : 테
// 배경색 바꾸려면 {...stringAvatar('User Name')} 사용
// 크기 변경하려면 sx={{width: 56, height: 56}}

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
  var user_name = "Test User";
  var profile = null;
  var score = 0;
  var solved = 0;
  var total = 0;
  profile = profile_default;

  return (
    <body>
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
        <Button variant="contained">문제 풀기</Button>
        <Button variant="contained">과거 기록 보기</Button>
      </div>
    </body>
  );
}

export default Main;
