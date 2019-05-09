import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Resume from 'components/Resume/Resume';
import PropTypes from 'prop-types';

import Form from 'components/Form/Form';
import './App.css';


const App = ({
  fields,
  changeValue,
  checkValue,
  changeValueOptionExp,
  changeValueOptionStudy,
  submit,
}) => (
  <MuiThemeProvider>
    <div className="App">
      <Form
        fields={fields}
        onChangeValue={changeValue}
        onCheckValue={checkValue}
        onChangeValueOptionExp={changeValueOptionExp}
        onChangeValueOptionStudy={changeValueOptionStudy}
        onSubmit={submit}
      />
      <Resume
        {...fields}
      />
    </div>
  </MuiThemeProvider>
);

App.propTypes = {

  fields: PropTypes.objectOf(
    PropTypes.shape({
      error: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
    }),
  ),
  initials: PropTypes.string.isRequired,
  submitErrors: PropTypes.bool.isRequired,
  submitValues: PropTypes.bool.isRequired,
  changeValue: PropTypes.func.isRequired,
  checkValue: PropTypes.func.isRequired,
  changeValueOptionExp: PropTypes.func.isRequired,
  changeValueOptionStudy: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default App;
