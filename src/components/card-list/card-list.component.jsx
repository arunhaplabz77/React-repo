import React from "react";

import { Row, Col } from "react-bootstrap";

import { CardComponent } from "../cards/card.component";

import "./card-list.styles.css";

export const CardList = ({ filteredOrganisations }) => {
  console.log(filteredOrganisations);
  return (
    <Row>
      {filteredOrganisations &&
        filteredOrganisations.map(organisation => (
          <Col md={6} lg={4} className='mb-3' key={organisation._id}>
            {" "}
            <CardComponent organisation={organisation} />{" "}
          </Col>
        ))}
    </Row>
  );
};
