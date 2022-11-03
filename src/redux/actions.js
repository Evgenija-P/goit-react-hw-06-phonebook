export const setTextFilter = value => {
  return {
    type: 'filters/text',
    payload: value,
  };
};
