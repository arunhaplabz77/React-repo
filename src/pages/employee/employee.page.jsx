import React from "react";
import Container from "react-bootstrap/Container";

import TableComponent from "./../../components/table/table.component";

import { connect } from "react-redux";

// import { createStructuredSelector } from "reselect";

// import WithSpinner from "./../../components/with-spinner/with-spinner.component";

// import { selectOrganisations, isLoading } from "./../../redux/organisation/organisation.selectors";
// import { setOrganisationsStartAsync } from "./../../redux/organisation/organisation.actions";
// import { CardList } from "./../../components/card-list/card-list.component";
// import { SearchComponent } from "./../../components/search/search.component";
// import { CustomButton } from "./../../components/custom-button/custom-button.component";

// const OrganisationsOverviewWithSpinner = WithSpinner(CardList);

class EmployeePage extends React.Component {
  constructor() {
    super();

   
  }
 
  render() {


    return (

   <TableComponent mb-3></TableComponent>
    );
  }
}



export default EmployeePage;

