import App from 'components/App/App';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'actions';

const mapStateToProps = state => ({
  fields: state.formFields,
  initials:
    `${state.formFields.lastName.value}
    ${state.formFields.firstName.value}
    ${state.formFields.patronymic.value}`,
  dateOfBirth: state.formFields.dateOfBirth.value,
  education: state.formFields.education.value,
  developmentExperience: state.formFields.developmentExperience.value,
  whatDoYouWantToStudy: state.formFields.whatDoYouWantToStudy.value,
  whatDoYouWantToStudy: state.formFields.aboutMe.value,
  submitErrors: state.formFields.submitErrors,
  submitValues: state.formFields.submitValues,
});

const mapDispatchToProps = disathch => ({
  ...bindActionCreators(actions, disathch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
