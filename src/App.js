import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';


import Header from './components/header/header.component';

import OrganisationPage from './pages/organisation/organisation.page';
import SignupPage from './pages/signup/signup.page';
import RegisterPage from './pages/register/register.page';
import LoginPage from './pages/login/login.page';
import EmployeePage from './pages/employee/employee.page';



class App extends React.Component {

  render() {

    return (


      <div>


        <Header></Header>

        <Route exact path='/' component={OrganisationPage} />
        <Route path='/signup' component={SignupPage} />

        <Route path='/register' component={RegisterPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/employee' component={EmployeePage} />
       
      </div>
    );
  }
}


export default App;
