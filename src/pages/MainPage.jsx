import React from "react";
import SearchBox from "../components/SearchBox";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Box, CircularProgress, Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const MainPage = () => {
  async function getBook() {
    const response = await axios.get(
      "https://openlibrary.org/subjects/love.json"
    );
    const data = response.data.works;

    return data;
  }

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["loveBooks"],
    queryFn: getBook,
  });

  console.log("가져온 데이터 : ", data, isLoading);

  return (
    <div>
      <SearchBox />
      <Container>
        <Grid container>
          {isLoading ? (
            <CircularProgress />
          ) : (
            data.map((item) => (
              <Grid
                size={{ xs: 6, md: 4 }}
                sx={{
                  height: "300px",
                  display: "flex",
                  justifyContent: "center",
                  padding: "10px 0",
                }}
              >
                <Box
                  sx={{
                    border: "solid 1px #797979",
                    width: "80%",
                    padding: "10px",
                    boxShadow: "3px 3px 0 #797979",
                  }}
                >
                  <CardActionArea
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <img
                      style={{ height: "80%" }}
                      src={`https://covers.openlibrary.org/b/id/${item.cover_id}-M.jpg`}
                      alt={item.title}
                    />
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                  </CardActionArea>
                </Box>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default MainPage;
