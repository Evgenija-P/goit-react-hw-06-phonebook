import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initialState = {
  tasks: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filters: {
    text: '',
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'filters/text':
      return {
        filters: {
          text: action.payload,
        },
      };
    case 'tasks/addContact':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'tasks/deleteTask':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    default:
      return state;
  }
};

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
