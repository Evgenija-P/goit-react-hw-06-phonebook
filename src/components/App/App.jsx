import React, { useState, useEffect } from 'react';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

import { AppWrapper, Title, TitleContacts } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('сontacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  // const [filterTex, setFilterTex] = useState('');

  useEffect(() => {
    localStorage.setItem('сontacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <AppWrapper>
      <Title>Phonebook</Title>
      <ContactForm />

      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      <ContactList />
    </AppWrapper>
  );
};
