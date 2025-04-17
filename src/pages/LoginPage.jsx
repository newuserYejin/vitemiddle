import { Container } from "@mui/material";
import React from "react";
import userStore from "../store/UserStore";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const { setUser } = userStore();
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();

    const userId = e.target[0].value;
    const userPw = e.target[1].value;

    if (userId.trim() != "" && userPw.trim() != "") {
      setUser(userId);
      navigate("/");
    } else {
      alert("아이디와 비밀번호를 확인하세요");
    }
  }

  return (
    <Container>
      <form onSubmit={(e) => login(e)}>
        <label htmlFor="userId">아이디</label>
        <input type="text" name="userId" id="userId" />

        <label htmlFor="userPw">비밀번호</label>
        <input type="text" name="userPw" id="userPw" />

        <button type="submit">로그인</button>
      </form>
    </Container>
  );
};

export default LoginPage;
