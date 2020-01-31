import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import "./organisation.styles.css";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import WithSpinner from "./../../components/with-spinner/with-spinner.component";

import { selectOrganisations, isLoading } from "./../../redux/organisation/organisation.selectors";
import { setOrganisationsStartAsync } from "./../../redux/organisation/organisation.actions";
import { CardList } from "./../../components/card-list/card-list.component";
import { SearchComponent } from "./../../components/search/search.component";
import { CustomButton } from "./../../components/custom-button/custom-button.component";

const OrganisationsOverviewWithSpinner = WithSpinner(CardList);

class OrganisationPage extends React.Component {
  constructor() {
    super();

    this.state={
      searchField:""
    }
  }
  componentDidMount() {
   const {setOrganisationsStartAsync} = this.props;
   setOrganisationsStartAsync();
    console.log("COMPONENT DID");
  }

  setSearchField = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {

    const { searchField } = this.state;

    const { organisations, isLoading } = this.props;
    console.log(organisations, "org");

    const filteredOrganisations = organisations.filter(organisation =>
      organisation.name.toLowerCase().includes(searchField.toLowerCase().trim())
    );

    return (

   
 

      <Container>

        <div className="organisation-actions my-5">
           
       
          <div className="search-field">
            <SearchComponent
              setSearchField={this.setSearchField}
            ></SearchComponent>
          </div>

          <CustomButton></CustomButton>
        </div>

        <OrganisationsOverviewWithSpinner
          filteredOrganisations={filteredOrganisations}
          isLoading ={isLoading}
        >

        </OrganisationsOverviewWithSpinner>
      </Container>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  organisations: selectOrganisations,
  isLoading: isLoading

});

const mapDispatchToProps = dispatch => ({
  setOrganisationsStartAsync: () => dispatch(setOrganisationsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(OrganisationPage);

