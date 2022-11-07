import { setTextFilter, addContact, deletContact } from './actions';

const tasksInitialState = {
  tasks: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const filtersInitialText = {
  text: '',
};

export const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case addContact:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case deletContact:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export const filtersReducer = (state = filtersInitialText, action) => {
  switch (action.type) {
    case setTextFilter:
      return {
        tasks: state.tasks.filter(task =>
          task.name
            .toLocaleLowerCase()
            .includes(action.payload.toLocaleLowerCase())
        ),
        filters: {
          text: action.payload,
        },
      };
    default:
      return state;
  }
};
