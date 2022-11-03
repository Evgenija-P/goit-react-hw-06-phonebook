import { nanoid } from 'nanoid';

export const setTextFilter = value => {
  return {
    type: 'filters/text',
    payload: value,
  };
};

export const addContact = ({ name, number }) => {
  return {
    type: 'tasks/addContact',
    payload: { id: nanoid(3), name, number },
  };
};

export const deletContact = contactsID => {
  return {
    type: 'tasks/deleteTask',
    payload: contactsID,
  };
};
