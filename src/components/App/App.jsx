import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
  submitErrors,
  submitValues,
}) => (
  <MuiThemeProvider>
    <div className="App">
      <h1>Стажировка в Dr Pepper</h1>
      <p>Пожалуйста, заполните как можно подробнее данную заявку.</p>
      <Form
        fields={fields}
        onChangeValue={changeValue}
        onCheckValue={checkValue}
        onChangeValueOptionExp={changeValueOptionExp}
        onChangeValueOptionStudy={changeValueOptionStudy}
        onSubmit={submit}
      />
      {!submitValues && submitErrors && <h3>Заполнетие все поля</h3>}
      <p>
        {!submitErrors && submitValues && JSON.stringify(fields, null, 2)}
      </p>
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
  ).isRequired,
  submitErrors: PropTypes.bool.isRequired,
  submitValues: PropTypes.bool.isRequired,
  changeValue: PropTypes.func.isRequired,
  checkValue: PropTypes.func.isRequired,
  changeValueOptionExp: PropTypes.func.isRequired,
  changeValueOptionStudy: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default App;
