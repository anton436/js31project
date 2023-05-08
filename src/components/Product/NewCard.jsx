import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardMedia } from "@mui/material";

export default function NewCard() {
  return (
    <Box sx={{ position: "relative", width: 300 }}>
      <Card sx={{ maxWidth: 320, boxShadow: "none" }}>
        <CardContent
          sx={{
            paddingBottom: 24,
            position: "relative",
            top: 0,
            color: "white",
            maxWidth: 320,
          }}
        >
          <CardMedia
            sx={{ boxShadow: "none", height: 300 }}
            image="https://cdn.about.puma.com/-/media/images/newsroom/brand-product-news/2023/05-03-23-superpuma/m111.jpg?as=1&h=1280&iar=1&w=1024&rev=00921a9f9e704bca87c8bb60f099b0d3&hash=6292BB80DF46FE695686DF10E1754EE3"
            title="green iguana"
          />
          <Box
            sx={{
              position: "absolute",
              top: 200,
              paddingLeft: 3,
              paddingRight: 3,
            }}
          >
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontSize: 13 }}
            >
              03-May-2023
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                fontSize: 20,
                fontWeight: 500,
                color: "white",
                fontFamily: "Kanit, sans-serif",
              }}
            >
              PUMA’S SUPER PUMA MASCOT IS THE HERO OF A PLAYFUL...
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
