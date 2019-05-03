import { CHANGE_VALUE, CHECK_VALUE, dateCheckExpression } from 'const';

const initialValue = {
  value: '',
  error: '',
};

const initialState = {
  firstName: initialValue,
  lastName: initialValue,
  patronymic: initialValue,
  dateOfBirth: initialValue,
  education: initialValue,
  developmentExperience: [],
  whatDoYouWantToStudy: [],
  aboutMe: initialValue,
  phoneNumber: initialValue,
  email: initialValue,
};

const fields = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.payload.fieldName]: {
          ...state.firstName,
          value: action.payload.value,
        },
      };

    case CHECK_VALUE:
      if (action.payload.value.length === 0) {
        return {
          ...state,
          [action.payload.fieldName]: {
            ...state[action.payload.fieldName],
            error: 'Это обязательный вопрос.',
          },
        };
      }
      if (
        action.payload.fieldName === 'firstName'
        && action.payload.value.length < 5
      ) {
        return {
          ...state,
          [action.payload.fieldName]: {
            ...state[action.payload.fieldName],
            error: 'Имя должно быть не менее 5 символов.',
          },
        };
      }
      if (
        action.payload.fieldName === 'dateOfBirth') {
        if (!action.payload.value.match(dateCheckExpression)) {
          return {
            ...state,
            [action.payload.fieldName]: {
              ...state[action.payload.fieldName],
              error: 'Введите дату рорждения в формате дд.мм.гггг',
            },
          };
        }
      }

      return {
        ...state,
        [action.payload.fieldName]: {
          ...state[action.payload.fieldName],
          error: '',
        },
      };

    default:
      return state;
  }
};
export default fields;
