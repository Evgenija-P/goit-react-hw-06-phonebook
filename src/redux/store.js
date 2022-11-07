// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './reducer';
import { tasksReducer, filtersReducer } from './reducer';

// const initialState = {
//   tasks: tasksReducer,
//   filters: filtersReducer,
// };

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
export const store = configureStore({
  reducer: { tasks: tasksReducer, filters: filtersReducer },
});
