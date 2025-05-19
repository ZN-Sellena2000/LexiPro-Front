import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

interface TimerProps {
  minutes: number; // 개발자가 설정한 제한 시간 (분 단위)
  redirectTo: string; // 시간이 끝났을 때 이동할 경로
}

const Timer: React.FC<TimerProps> = ({ minutes, redirectTo }) => {
  const [timeLeft, setTimeLeft] = useState<number>(minutes * 60);
  const navigate = useNavigate();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isNaN(minutes) || minutes <= 0) {
      console.error('Invalid "minutes" prop passed!');
      return;
    }

    // 타이머가 시작될 때 interval 설정
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          navigate(redirectTo); // 시간 끝나면 이동
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalRef.current!);
  }, [minutes, navigate, redirectTo]);

  // 시간 포맷 (MM:SS)
  const formatTime = (seconds: number): string => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  return (
    <h1 style={{ marginTop: "10px", marginBottom: "10px" }}>
      {isNaN(timeLeft) ? "00:00" : formatTime(timeLeft)}
    </h1>
  );
};

export default Timer;
