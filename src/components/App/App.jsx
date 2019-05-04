import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';
import Form from 'components/Form/Form';

const App = ({
  fields,
  changeValue,
  checkValue,
  changeValueOptionExp,
  changeValueOptionStudy,
}) => (
  <MuiThemeProvider>
    <div className="App">
      <Form
        fields={fields}
        onChangeValue={changeValue}
        onCheckValue={checkValue}
        onChangeValueOptionExp={changeValueOptionExp}
        onChangeValueOptionStudy={changeValueOptionStudy}
      />
      <p>
        {JSON.stringify(fields, null, 2)}
      </p>
    </div>
  </MuiThemeProvider>
);

export default App;
