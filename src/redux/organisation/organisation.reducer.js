import { OrganisationActionTypes } from './organisation.types';

const INITIAL_STATE = {
  organisations: [],
  loading:true,
  errorMessage: undefined

};

const organisationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case OrganisationActionTypes.SET_ORGANISATIONS_START:
      return {
        ...state,
        loading:true
      };

      case OrganisationActionTypes.SET_ORGANISATIONS_SUCCESS:
        return {
          ...state,
          organisations: action.payload,
          loading:false
        };

        case OrganisationActionTypes.SET_ORGANISATIONS_FAILURE:
          return {
            ...state,

            loading:false,
            errorMessage:action.payload
          };
     
    default:
      return state;
  }
};

export default organisationReducer;