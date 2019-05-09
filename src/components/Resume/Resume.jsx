import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import 'components/Resume/Resume.css';
import { developmentExperienceArr, whatDoYouWantToStudyArr } from 'const';

const style = {
  height: 800,
  width: 600,
  margin: 20,
  paddingLeft: 70,
  paddingRight: 60,
  textAlign: 'center',
  display: 'inline-block',
};

const Resume = ({
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
}) => (
  <Paper style={style} zDepth={2}>
    <h1>Резюме</h1>
    <p className="initials">
      {
        `${lastName.value} ${firstName.value} ${patronymic.value}`
      }
    </p>
    <div className="container">
      <img
        alt=""
        src="http://www.obrazcy-rezume.ru/wp-content/uploads/2015/09/photo.jpg"
        className="avatar"
      />
      <p>Город: Винница</p>
      <p>{`Моб.телефон: ${phoneNumber.value}`}</p>
      <p>
        {`E-mail: ${email.value}`}
      </p>
      <p>{`Дата рождения: ${dateOfBirth.value}`}</p>
      <h3>Основная информация:</h3>
    </div>
    <div className="container">
      <h3>Желаемая должность:</h3>
      <p>Программист</p>
      <p>Занятость: постоянная</p>
      <p>
        {
        `Опыт работы: ${developmentExperienceArr[developmentExperience.value]}`
        }
      </p>
      <p>Иностранные языки: английский технический</p>
    </div>
    <div className="container">
      <h3>Образование:</h3>
      <p>{education.value}</p>
    </div>
    <div className="container">
      <h3>Профессиональные навыки:</h3>
      <p>{whatDoYouWantToStudyArr[whatDoYouWantToStudy.value]}</p>
    </div>
    <div className="container">
      <h3>О себе: </h3>
      <p>{aboutMe.value}</p>
    </div>
  </Paper>
);
export default Resume;

Resume.propTypes = {
  firstName: PropTypes.shape({
    error: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
  lastName: PropTypes.shape({
    error: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
  patronymic: PropTypes.shape({
    error: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
  dateOfBirth: PropTypes.shape({
    error: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
  education: PropTypes.shape({
    error: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
  developmentExperience: PropTypes.shape({
    error: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }),
  whatDoYouWantToStudy: PropTypes.shape({
    error: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }),
  aboutMe: PropTypes.shape({
    error: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
  phoneNumber: PropTypes.shape({
    error: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
  email: PropTypes.shape({
    error: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
};
