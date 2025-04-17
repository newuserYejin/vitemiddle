import { Container, Grid } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";
import userStore from "../store/UserStore";

const Header = () => {
  const navigate = useNavigate();

  const { userName, setUser } = userStore();

  console.log("userName : ", userName);

  function logout() {
    setUser("");
    navigate("/");
  }

  return (
    <Container sx={{ borderBottom: "solid 1px #797979", marginBottom: "1rem" }}>
      <Grid className="header" container>
        <Grid size={8} className="headerLogo" onClick={() => navigate("/")}>
          코딩알려주는 누나 도서관
        </Grid>

        <Grid size={4} className="menuOpenBtn">
          <MenuIcon />
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }} className="menuList">
          <div onClick={() => navigate("/")}>메인</div>
          <div
            onClick={() =>
              userName == "" ? navigate("/login") : navigate("/mybook")
            }
          >
            나의 책
          </div>
          <div onClick={() => (userName == "" ? navigate("/login") : logout)}>
            {userName == "" ? "로그인" : "로그아웃"}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
