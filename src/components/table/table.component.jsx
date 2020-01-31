import React from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';




class TableComponent extends  React.Component {


    constructor() {
        super();



        this.state = {
            name:"",
            address:""
        };
    }

   render() {

    const {name, address} = this.state;
       return(
           <Container>
               <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th> Name</th>
      <th>Email</th>
      <th>Salary</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Mark@gmail.com</td>
      <td>USD 20000</td>
      <td>Edit it</td>
      <td>Delete it</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Mark</td>
      <td>Mark@gmail.com</td>
      <td>USD 20000</td>
      <td>Edit it</td>
      <td>Delete it</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Mark</td>
      <td>Mark@gmail.com</td>
      <td>USD 20000</td>
      <td>Edit it</td>
      <td>Delete it</td>
    </tr>
  </tbody>
</Table>
           </Container>
        
       )
   }



}

export default TableComponent;