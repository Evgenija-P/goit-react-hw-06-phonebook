import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';
// import { addContact, deletContact } from './contactsSlice';
// import { setTextFilter } from './filtersSlice';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filters: filtersReducer,
// });

export const store = configureStore({
  reducer: { contacts: contactsReducer, filters: filtersReducer },
});
