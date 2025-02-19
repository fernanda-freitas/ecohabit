import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCard({ recyclingCenter }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {recyclingCenter.description}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Distance from you: {recyclingCenter.distance} Miles
        </Typography>
        <Typography variant="body2">
          {recyclingCenter.detail.address}
          <br />
          {recyclingCenter.detail.city}, {recyclingCenter.detail.province}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="small">
          <a href={recyclingCenter.detail.url}>Learn More</a>
        </Button>
      </CardActions>
    </Card>
  );
}
