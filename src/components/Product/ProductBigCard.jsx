import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { Box } from "@mui/material";

export default function ProductBigCard() {
  return (
    <Box
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      <Card
        sx={{
          maxWidth: 800,
          maxHeight: 800,
          margin: 0,
          border: "none",
          boxShadow: "none",
          borderRadius: "0",
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="600"
          image="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/390934/01/sv01/fnd/EEA/fmt/png/SUNP%C5%8C-RS-Trck-Sneakers-Women"
        />
        <CardContent
          style={{
            padding: "0",
            marginBottom: "5%",
            marginTop: "2%",
          }}
        >
          <Typography
            variant="body2"
            style={{
              fontSize: "0.9em",
              opacity: "0.8",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Color
            <div style={{ display: "flex" }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="100px"
                image="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/390934/01/sv01/fnd/EEA/fmt/png/SUNP%C5%8C-RS-Trck-Sneakers-Women"
                width="100px"
                style={{ marginRight: "4%" }}
              />
              <CardMedia
                component="img"
                alt="green iguana"
                height="100px"
                image="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/390934/01/sv01/fnd/EEA/fmt/png/SUNP%C5%8C-RS-Trck-Sneakers-Women"
                width="100px"
                style={{ marginRight: "4%" }}
              />
            </div>
          </Typography>
        </CardContent>

        <CardContent
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0",
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            style={{ fontSize: "1em", fontWeight: "bolder" }}
          >
            PUMA x THE RAGGED PRIEST Twill Skirt Women
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            style={{ fontSize: "1em", fontWeight: "bolder" }}
          >
            69,95 €
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
