import { CHANGE_VALUE, CHECK_VALUE } from 'const';

export const changeValue = (fieldName, value) => ({
  type: CHANGE_VALUE,
  payload: {
    fieldName,
    value,
  },
});

export const checkValue = (fieldName, value) => ({
  type: CHECK_VALUE,
  payload: {
    fieldName,
    value,
  },
});
