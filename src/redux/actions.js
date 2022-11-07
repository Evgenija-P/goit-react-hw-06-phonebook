import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const setTextFilter = createAction('filters/text');

export const addContact = createAction(
  'tasks/addContact',
  ({ name, number }) => {
    return {
      payload: { id: nanoid(3), name, number },
    };
  }
);

export const deletContact = createAction('tasks/deleteTask');

// export const setTextFilter = value => {
//   return {
//     type: 'filters/text',
//     payload: value,
//   };
// };

// export const addContact = ({ name, number }) => {
//   return {
//     type: 'tasks/addContact',
//     payload: { id: nanoid(3), name, number },
//   };
// };

// export const deletContact = contactsID => {
//   return {
//     type: 'tasks/deleteTask',
//     payload: contactsID,
//   };
// };
