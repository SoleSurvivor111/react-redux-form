import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';

const style = {
  height: 800,
  width: 600,
  margin: 20,
  paddingLeft: 90,
  paddingRight: 90,
  textAlign: 'center',
  display: 'inline-block',
};

const Resume = ({
  initials,
}) => (
  <Paper style={style} zDepth={2}>
    <h1>Резюме</h1>
    <p className="initials">
      {initials}
    </p>
    <div className="container">
      <img
        alt=""
        src="http://www.obrazcy-rezume.ru/wp-content/uploads/2015/09/photo.jpg"
        className="avatar"
      />
      <p>Город: Винница</p>
      <p>Моб. телефон: +7 (000) 000 00 00</p>
      <p>E-mail: xxxxxxxxxxx@gmail.com</p>
      <p>Дата рождения: xxxxxx@gmail.com</p>
      <h3>Основная информация:</h3>
    </div>
    <div className="container">
      <h3>Желаемая должность:</h3>
      <p>Программист</p>
      <p>Занятость: постоянная</p>
      <p>Опыт работы: от 5 лет</p>
      <p>Иностранные языки: английский технический</p>
    </div>
    <div className="container">
      <h3>Образование:</h3>
      <p>Занятость: постоянная</p>
    </div>
    <div className="container">
      <h3>Профессиональные навыки:</h3>
      <p>Занятость: постоянная</p>
    </div>
    <div className="container">
      <h3>О себе:</h3>
      <p>Занятость: постоянная</p>
    </div>
  </Paper>
);
export default Resume;
