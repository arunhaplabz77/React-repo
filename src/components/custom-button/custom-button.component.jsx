import React from "react";
import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";

export const CustomButton = props => (
  <Link to="/signup">
    <Button variant="primary">Create organisation</Button>
  </Link>
);
