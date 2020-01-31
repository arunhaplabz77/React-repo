import { OrganisationActionTypes } from './organisation.types';



export const setOrganisationsSuccess= organisations => ({
  type: OrganisationActionTypes.SET_ORGANISATIONS_SUCCESS,
  payload: organisations
});

export const setOrganisationsFailure= errorMessage => ({
  type: OrganisationActionTypes.SET_ORGANISATIONS_Failure,
  payload: errorMessage
});


export const setOrganisationsStartAsync = () => {
  return dispatch => {
    // dispatch(setOrganisations());
    setTimeout(() => {


      fetch("http://127.0.0.1:3002/api/org/")
        .then(response => response.json())

        .then(organisations => {

          console.log(organisations, 'after gettinh in Api');
        
          dispatch(setOrganisationsSuccess(organisations.data));
        });
    }, 2000);
  }
}