/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { AiOutlineUserAdd } from 'react-icons/ai';

import { Form, Label, Input, Button } from './ContactForm.styled';
import { addContact } from 'redux/actions';
import { getContacts } from 'redux/selectors';

export const ContactForm = () => {
  const nameId = nanoid(3);
  const numberId = nanoid(3);
  const contacts = useSelector(getContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts.`);
    }

    dispatch(addContact({ name, number }));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor={nameId}>Name</Label>
        <Input
          type="text"
          name="name"
          value={name}
          id={nameId}
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChangeName}
        />
        <Label htmlFor={numberId}>Number</Label>
        <Input
          type="tel"
          name="number"
          value={number}
          id={numberId}
          placeholder="Number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChangeNumber}
        />
        <Button type="submit">
          <AiOutlineUserAdd size={24} color={'blue'} />
        </Button>
      </Form>
    </>
  );
};
