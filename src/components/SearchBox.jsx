import { Container, Box } from "@mui/material";
import React from "react";
import userStore from "../store/UserStore";

const SearchBox = () => {
  const { userName } = userStore();

  return (
    <Container className="searchBox">
      <Box>
        <div>코딩알려주는 누나 도서관</div>
        <div>{userName ? userName + "님" : null} 환영합니다</div>
      </Box>

      <div>
        <input type="text" />
        <button>검색</button>
      </div>
    </Container>
  );
};

export default SearchBox;
