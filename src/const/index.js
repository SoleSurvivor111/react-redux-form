export const CHECK_VALUE = 'CHECK_VALUE';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const CHANGE_OPTION_EXP = 'CHANGE_OPTION_EXP';
export const CHANGE_OPTION_STD = 'CHANGE_OPTION_STD';
// export const CHANGE_VALUE = 'CHANGE_VALUE';
export const dateCheckExpression = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
export const emailCheckExpression = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm
export const numberCheckExpression = /^((\+?7|8)[ \-] ?)?((\(\d{3}\))|(\d{3}))?([ \-])?(\d{3}[\- ]?\d{2}[\- ]?\d{2})$/;
export const developmentExperienceArr = [
  'Выбрать',
  'Нет',
  'До 1 года',
  'От 1 до 2 лет',
  'От 2 до 3 лет',
  'Больше 3',
];
export const whatDoYouWantToStudyArr = [
  'Выбрать',
  'Front-end (Html/JS/CSS React/Redux)',
  'Back-end  (Ruby, Ruby on Rails)',
  'Всё интересно',
];
