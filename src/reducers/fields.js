import {
  initialState,
  CHANGE_VALUE,
  CHECK_VALUE,
  CHANGE_OPTION_EXP,
  CHANGE_OPTION_STD,
  SUBMIT,
  dateCheckExpression,
  numberCheckExpression,
  emailCheckExpression,
} from 'const';

const returnState = (action, state, error) => ({
  ...state,
  [action.payload.fieldName]: {
    ...state[action.payload.fieldName],
    error,
  },
});

const returnSelectState = (action, state, error) => ({
  ...state,
  [action.payload.fieldName]: {
    ...state[action.payload.fieldName],
    value: action.payload.optionValue,
    error: action.payload.optionValue === 0
      ? error
      : '',
  },
});

const formFields = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.payload.fieldName]: {
          ...state.firstName,
          value: action.payload.value,
        },
      };

    case CHANGE_OPTION_EXP:
      return returnSelectState(action, state, 'Это обязательный вопрос.');

    case CHANGE_OPTION_STD:
      return returnSelectState(action, state, 'Это обязательный вопрос.');

    case CHECK_VALUE:
      if (action.payload.value.length === 0) {
        return returnState(action, state, 'Это обязательный вопрос.');
      }


      if (
        action.payload.fieldName === 'firstName'
        && action.payload.value.length < 5
      ) {
        return returnState(action, state, 'Имя должно быть не менее 5 символов.');
      }


      if (
        action.payload.fieldName === 'dateOfBirth'
        && !action.payload.value.match(dateCheckExpression)
      ) {
        return returnState(action, state, 'Введите дату в формате ДД-ММ-ГГГГ');
      }


      if (
        action.payload.fieldName === 'phoneNumber') {
        if (!action.payload.value.match(numberCheckExpression)) {
          return returnState(action, state, 'Введите номер в формате +7-XXX-XXX-XX-XX');
        }
      }


      if (
        action.payload.fieldName === 'email') {
        if (!action.payload.value.match(emailCheckExpression)) {
          return returnState(action, state, 'Email введен в неверном формате');
        }
      }


      return returnState(action, state, '');

    case SUBMIT: {
      const arrOfKeys = Object.keys(state).splice(0, 10);
      let errors = false;
      for (let i = 0; i < arrOfKeys.length; i += 1) {
        const item = state[arrOfKeys[i]];
        if (item.error) {
          errors = true;
          break;
        }
      }

      let values = true;
      for (let i = 0; i < arrOfKeys.length; i += 1) {
        const item = state[arrOfKeys[i]];
        if (!item.value) {
          values = false;
          break;
        }
      }
      let newState = { ...state };
      if (!values) {
        for (let i = 0; i < arrOfKeys.length; i += 1) {
          const item = state[arrOfKeys[i]];
          if (!item.value) {
            errors = true;
            newState = {
              ...newState,
              [arrOfKeys[i]]: {
                ...item,
                error: 'Это обязательный вопрос.',
              },
            };
          }
        }
      }
      return {
        ...newState,
        submitErrors: errors,
        submitValues: values,
      };
    }

    default:
      return state;
  }
};
export default formFields;
