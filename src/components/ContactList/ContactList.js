import React from 'react';
import { useSelector } from 'react-redux';

import { List, Item } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';

export const ContactList = () => {
  const contacts = useSelector(state => state.tasks);
  // const filterText = useSelector(state => state.filters.text);

  // const normalized = filterText.toLocaleLowerCase();
  // const mapContacts = contacts.filter(contact =>
  //   contact.name.toLocaleLowerCase().includes(normalized)
  // );

  console.log(contacts);

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Contact id={id} name={name} number={number} />
        </Item>
      ))}
    </List>
  );
};
