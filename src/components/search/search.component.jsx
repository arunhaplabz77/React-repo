import React from "react";
import Form from 'react-bootstrap/Form'

export const SearchComponent = ({ setSearchField }) => 

(

  <Form.Control type="search" placeholder="Enter the name"    onChange={setSearchField}/>
);
