import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProducts } from "../../contexts/ProductContextProvider";

export default function ProductCard({ item }) {
  const { deleteProduct } = useProducts();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={item.picture}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small" onClick={() => deleteProduct(item.id)}>
          Delete
        </Button>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  );
}