import {
  CHANGE_VALUE,
  CHECK_VALUE,
  CHANGE_OPTION_EXP,
  CHANGE_OPTION_STD,
  SUBMIT,
  dateCheckExpression,
  numberCheckExpression,
  emailCheckExpression,
} from 'const';

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
  developmentExperience: { error: '', value: 0 },
  whatDoYouWantToStudy: { error: '', value: 0 },
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

    case CHANGE_OPTION_EXP:
      return {
        ...state,
        [action.payload.fieldName]: {
          ...state.developmentExperience,
          value: action.payload.optionValue,
          error: action.payload.optionValue === 0
            ? 'Это обязательный вопрос.'
            : '',
        },
      };

    case CHANGE_OPTION_STD:
      return {
        ...state,
        [action.payload.fieldName]: {
          ...state.whatDoYouWantToStudy,
          value: action.payload.optionValue,
          error: action.payload.optionValue === 0
            ? 'Это обязательный вопрос.'
            : '',
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
              error: 'Введите дату в формате ДД-ММ-ГГГГ',
            },
          };
        }
      }


      if (
        action.payload.fieldName === 'phoneNumber') {
        if (!action.payload.value.match(numberCheckExpression)) {
          return {
            ...state,
            [action.payload.fieldName]: {
              ...state[action.payload.fieldName],
              error: 'Введите номер в формате +7-XXX-XXX-XX-XX',
            },
          };
        }
      }


      if (
        action.payload.fieldName === 'email') {
        if (!action.payload.value.match(emailCheckExpression)) {
          return {
            ...state,
            [action.payload.fieldName]: {
              ...state[action.payload.fieldName],
              error: 'Email введен в неверном формате',
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

    // case SUBMIT: {
    //   const {
    //     firstName,
    //     lastName,
    //     patronymic,
    //     dateOfBirth,
    //     education,
    //     developmentExperience,
    //     whatDoYouWantToStudy,
    //     aboutMe,
    //     phoneNumber,
    //     email,
    //   } = action.payload.fields;
    //   return {
    //     firstName: firstName ,
    //     lastName: initialValue,
    //     patronymic: initialValue,
    //     dateOfBirth: initialValue,
    //     education: initialValue,
    //     developmentExperience: { error: '', value: 0 },
    //     whatDoYouWantToStudy: { error: '', value: 0 },
    //     aboutMe: initialValue,
    //     phoneNumber: initialValue,
    //     email: initialValue,
    //   };
    // }
    default:
      return state;
  }
};
export default fields;
