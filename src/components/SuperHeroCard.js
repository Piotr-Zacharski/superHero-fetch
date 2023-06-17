import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

export default function SuperHeroCard({ image, name }) {
  return (
    <Card
    elevation={8}
      sx={{
        maxWidth: 345,
        margin: "30px auto",
        padding: 5,
        backgroundColor: "#ecf0f1",
      }}
    >
      <CardMedia
        sx={{
          width: 200,
          height: 250,
          margin: "auto",
          padding: 7,
          borderRadius: 5,
        }}
        image={image}
      />
      <CardContent>
        <Typography
          sx={{
            fontWeight: "bold",
            marginTop: 5,
            fontFamily: "Super Brigade",
          }}
          variant="h5"
          component="div"
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
