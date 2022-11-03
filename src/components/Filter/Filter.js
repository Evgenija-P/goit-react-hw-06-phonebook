import React from 'react';
import { setTextFilter } from 'redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
import { Label, Input, Title } from './Filter.styled';

// import { Button } from './FeedbackOptions.styled';

export const Filter = () => {
  const value = useSelector(state => state.filters.text);

  const dispatch = useDispatch();
  const filretContacts = e => {
    dispatch(setTextFilter(e.currentTarget.value));
    console.log(e.currentTarget.value);
  };

  const filterId = nanoid(3);
  return (
    <Label htmlFor={filterId}>
      <Title>Find contacts by name</Title>
      <Input
        type="text"
        placeholder="Input name"
        value={value}
        onChange={filretContacts}
        id={filterId}
      />
    </Label>
  );
};

Filter.propTypes = {
  // value: PropTypes.string.isRequired,
  // onFilretContacts: PropTypes.func.isRequired,
};
