import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { v4 } from 'node-uuid';
import { developmentExperienceArr, whatDoYouWantToStudyArr } from 'const';

export default class Form extends React.Component {
  handleChangeValue = (e) => {
    const { onChangeValue } = this.props;
    onChangeValue(e.target.name, e.target.value);
  };

  handleCheckValue = (e) => {
    const { onCheckValue } = this.props;
    onCheckValue(e.target.name, e.target.value);
  };

  handleChangeValueOptionExp = (e, index, value) => {
    const { onChangeValueOptionExp } = this.props;
    onChangeValueOptionExp(value);
  };

  handleChangeValueOptionStudy = (e, index, value) => {
    const { onChangeValueOptionStudy } = this.props;
    onChangeValueOptionStudy(value);
  };

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
    } = this.props.fields;
    return (
      <form>
        <h4>Имя</h4>
        <TextField
          name="firstName"
          hintText="Введите имя"
          value={firstName.value}
          errorText={firstName.error}
          onChange={this.handleChangeValue}
          onBlur={this.handleCheckValue}
        />
        <br />
        <h4>Фамилия</h4>
        <TextField
          name="lastName"
          hintText="Введите фамилию"
          value={lastName.value}
          errorText={lastName.error}
          onChange={this.handleChangeValue}
          onBlur={this.handleCheckValue}
        />
        <br />
        <h4>Отчество</h4>
        <TextField
          name="patronymic"
          hintText="Введите отчество"
          value={patronymic.value}
          errorText={patronymic.error}
          type="text"
          onChange={this.handleChangeValue}
          onBlur={this.handleCheckValue}
        />
        <br />
        <h4>Дата рождения</h4>
        <TextField
          name="dateOfBirth"
          hintText="ДД-ММ-ГГГГ"
          value={dateOfBirth.value}
          errorText={dateOfBirth.error}
          type="text"
          onChange={this.handleChangeValue}
          onBlur={this.handleCheckValue}
        />
        <br />
        <h4>Образование</h4>
        <TextField
          name="education"
          hintText="Мой ответ"
          value={education.value}
          errorText={education.error}
          onChange={this.handleChangeValue}
          onBlur={this.handleCheckValue}
        />
        <br />
        <h4>Опыт в разработке</h4>
        <SelectField
          hintText="Выбрать"
          onChange={this.handleChangeValueOptionExp}
          value={developmentExperience.value}
          errorText={developmentExperience.error}
          name="developmentExperience"
          labelStyle={{ textAlign: 'start' }}
        >
          {
            developmentExperienceArr.map(
              (item, index) => (
                <MenuItem key={v4()} value={index} primaryText={item} />
              ),
            )
          }
        </SelectField>
        <h4>Что хотите изучать</h4>
        <SelectField
          hintText="Выбрать"
          onChange={this.handleChangeValueOptionStudy}
          value={whatDoYouWantToStudy.value}
          errorText={whatDoYouWantToStudy.error}
          labelStyle={{ textAlign: 'start' }}
          autoWidth
        >
          {
            whatDoYouWantToStudyArr.map(
              (item, index) => (
                <MenuItem key={v4()} value={index} primaryText={item} />
              ),
            )
          }
        </SelectField>
        <h4>Немного о себе</h4>
        <TextField
          name="aboutMe"
          hintText="Введите отчество"
          value={aboutMe.value}
          errorText={aboutMe.error}
          type="text"
          onChange={this.handleChangeValue}
          onBlur={this.handleCheckValue}
        />
        <br />
        <h4>Мобильный телефон</h4>
        <TextField
          name="phoneNumber"
          hintText="Телефон"
          value={phoneNumber.value}
          errorText={phoneNumber.error}
          type="text"
          onChange={this.handleChangeValue}
          onBlur={this.handleCheckValue}
        />
        <br />
        <h4>Email</h4>
        <TextField
          name="email"
          hintText="Введите Email"
          errorText={email.error}
          onChange={this.handleChangeValue}
          onBlur={this.handleCheckValue}
        />
        <br />
        <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
      </form>
    );
  }
}
