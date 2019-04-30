import { CHANGE_VALUE, CHECK_VALUE } from 'const';

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
  developmentExperience: initialValue,
  whatDoYouWantToStudy: initialValue,
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
            error: 'Имя должно быть не менее 5 символов',
          },
        };
      }
    default:
      return state;
  }
};
export default fields;
