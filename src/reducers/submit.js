import { SUBMIT } from 'const';

const initialState = {
  submitErrors: false,
  submitValues: false,
};

const submit = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT: {
      const { fields } = action.payload;
      const arrOfKeys = Object.keys(fields);

      let errors = false;
      for (let i = 0; i < arrOfKeys.length; i += 1) {
        const item = fields[arrOfKeys[i]];
        if (item.error) {
          errors = true;
          break;
        }
      }

      let values = false;
      for (let i = 0; i < arrOfKeys.length; i += 1) {
        const item = fields[arrOfKeys[i]];
        if (!item.value) {
          values = true;
          break;
        }
      }
      return {
        submitErrors: errors,
        submitValues: values,
      };
    }
    default:
      return state;
  }
};
export default submit;
