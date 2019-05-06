import {
  CHANGE_VALUE,
  CHECK_VALUE,
  CHANGE_OPTION_EXP,
  CHANGE_OPTION_STD,
  SUBMIT,
} from 'const';

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

export const changeValueOptionExp = optionValue => ({
  type: CHANGE_OPTION_EXP,
  payload: {
    fieldName: 'developmentExperience',
    optionValue,
  },
});

export const changeValueOptionStudy = optionValue => ({
  type: CHANGE_OPTION_STD,
  payload: {
    fieldName: 'whatDoYouWantToStudy',
    optionValue,
  },
});

export const submit = fields => ({
  type: SUBMIT,
  payload: {
    fields,
  },
});
