
import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import organisationReducer from './organisation/organisation.reducer';


// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['cart']
// };

const rootReducer = combineReducers({
    organisation: organisationReducer

});

export default rootReducer;

//  persistReducer(persistConfig, rootReducer);