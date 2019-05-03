import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class Form extends React.Component {
  items = [
    <MenuItem key={1} value={1} primaryText="Never" />,
    <MenuItem key={2} value={2} primaryText="Every Night" />,
    <MenuItem key={3} value={3} primaryText="Weeknights" />,
    <MenuItem key={4} value={4} primaryText="Weekends" />,
    <MenuItem key={5} value={5} primaryText="Weekly" />,
  ];

handleChange = (event, index, value) => this.setState({ value });

  onChangeValue = (e) => {
    const { onChangeValue } = this.props;
    onChangeValue(e.target.name, e.target.value);
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
        <h4>Имя</h4>
        <TextField
          name="firstName"
          hintText="Введите имя"
          value={firstName.value}
          errorText={firstName.error}
          onChange={this.onChangeValue}
          onBlur={this.onCheckValue}
        />
        <br />
        <h4>Фамилия</h4>
        <TextField
          name="lastName"
          hintText="Введите фамилию"
          value={lastName.value}
          errorText={lastName.error}
          onChange={this.onChangeValue}
          onBlur={this.onCheckValue}
        />
        <br />
        <h4>Отчество</h4>
        <TextField
          name="patronymic"
          hintText="Введите отчество"
          value={patronymic.value}
          errorText={patronymic.error}
          type="text"
          onChange={this.onChangeValue}
          onBlur={this.onCheckValue}
        />
        <br />
        <h4>Дата рождения</h4>
        <TextField
          name="dateOfBirth"
          hintText="дд.мм.гггг"
          value={dateOfBirth.value}
          errorText={dateOfBirth.error}
          type="text"
          onChange={this.onChangeValue}
          onBlur={this.onCheckValue}
        />
        <br />
        <h4>Образование</h4>
        <TextField
          name="education"
          hintText="Мой ответ"
          value={education.value}
          errorText={education.error}
          onChange={this.onChangeValue}
          onBlur={this.onCheckValue}
        />
        <br />
        <h4>Опыт в разработке</h4>
        <SelectField
          hintText="Выбрать"
          onChange={this.handleChange}
        >
          {developmentExperience}
        </SelectField>
        <h4>Что хотите изучать</h4>
        <SelectField
          hintText="Выбрать"
          onChange={this.handleChange}
        >
          {whatDoYouWantToStudy}
        </SelectField>
        <h4>Немного о себе</h4>
        <TextField
          name="aboutMe"
          hintText="Введите отчество"
          value={aboutMe.value}
          errorText={aboutMe.error}
          type="text"
          onChange={this.onChangeValue}
          onBlur={this.onCheckValue}
        />
        <br />
        <h4>Мобильный телефон</h4>
        <TextField
          name="phoneNumber"
          hintText="Телефон"
          value={phoneNumber.value}
          errorText={phoneNumber.error}
          type="text"
          onChange={this.onChangeValue}
          onBlur={this.onCheckValue}
        />
        <br />
        <h4>Email</h4>
        <TextField
          name="email"
          hintText="Введите Email"
          errorText={email.error}
          onChange={this.onChangeValue}
          onBlur={this.onCheckValue}
        />
        <br />
        <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
      </form>
    );
  }
}
