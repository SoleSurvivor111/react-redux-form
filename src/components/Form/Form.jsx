import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Form extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  };

  onChangeValue = (e) => {
    const { onChangeValue } = this.props;
    onChangeValue(e.target.name, e.target.value)
  };

  onCheckValue = (e) => {
    const { onCheckValue } = this.props;
    onCheckValue(e.target.name, e.target.value);
  };

  validate = () => {
    const {
      firstName,
    } = this.props.fields;
    let isError = false;
    const errors = {};

    if (firstName.length < 5) {
      isError = true;
      errors.firstName = 'Имя должно быть не менее 5 символов';
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    const err = this.validate();
    this.setState({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
    });
    this.props.onChange({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
    });
  };

  render() {
    const {
      firstName,
      lastName,
      patronymic,
      dateOfBirth,
      education,
      developmentExperience,
      whatDoYouWantToStudy,
      aboutMe,
      phoneNumber,
      email,
      onChangeValue,
      onCheckValue,
    } = this.props.fields;
    return (
      <form>
        <TextField
          name="firstName"
          hintText="Введите имя"
          floatingLabelText="Имя"
          value={firstName.value}
          onChange={this.onChangeValue}
          onBlur={this.onCheckValue}
          errorText={firstName.error}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="lastName"
          hintText="Введите фамилию"
          floatingLabelText="Фамилия"
          onBlur={this.onChangeValue}
          value={lastName.value}
          onChange={e => this.change(e)}
          errorText={lastName.error}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="patronymic"
          hintText="Введите отчество"
          floatingLabelText="Образование"
          value={patronymic.value}
          onChange={e => this.change(e)}
          errorText={patronymic.error}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="dateOfBirth"
          hintText="дд.мм.гггг"
          floatingLabelText="Дата рождения"
          value={firstName.value}
          onChange={e => this.change(e)}
          errorText={firstName.error}
          type="text"
          floatingLabelFixed
        />
        <br />
        <TextField
          name="email"
          hintText="Email"
          floatingLabelText="Email"
          value={email.error.value}
          onChange={e => this.change(e)}
          errorText={email.error}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="password"
          hintText="Password"
          floatingLabelText="Password"
          value={firstName.value}
          onChange={e => this.change(e)}
          errorText={firstName.error}
          type="password"
          floatingLabelFixed
        />
        <br />
        <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
      </form>
    );
  }
}
