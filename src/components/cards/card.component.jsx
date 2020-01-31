import React from "react";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import "./card.styles.css";

export const CardComponent = ({ organisation: { _id, name } }) => (
  <Card className="card-container">
    <CardContent key={_id}>{name}</CardContent>
  </Card>
);
