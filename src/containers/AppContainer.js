import App from 'components/App/App';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'actions';

const mapStateToProps = (state) => {
  const {
    submitErrors,
    submitValues,
    ...fields
  } = state.formFields;
  return {
    fields,
    initials:
    `${state.formFields.lastName.value}
    ${state.formFields.firstName.value}
    ${state.formFields.patronymic.value}`,
    submitErrors: state.formFields.submitErrors,
    submitValues: state.formFields.submitValues,
  };
};
const mapDispatchToProps = disathch => ({
  ...bindActionCreators(actions, disathch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
