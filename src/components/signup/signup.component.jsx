import React from "react";
import { CustomButton } from "../custom-button/custom-button.component";



class Signup extends  React.Component {


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

        <div className='signup'> 
        <h2 className='title'>Create organistion</h2>
        <span> create the name of organisation</span>

        <form  className='signup-form' >
            NAME
            <input type='text' name='name' value={name} ></input>
            ADDRESS
            <input type='text' name='address' value={address} ></input>
            <CustomButton type='submit'>Register</CustomButton>
        </form>
        
        </div>
       )
   }



}

export default Signup;