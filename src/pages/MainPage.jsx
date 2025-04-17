import React from "react";
import SearchBox from "../components/SearchBox";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
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
      {isLoading ? (
        <CircularProgress />
      ) : (
        data.map((item) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="#"
                alt={item.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))
      )}
    </div>
  );
};

export default MainPage;
