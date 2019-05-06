import App from 'components/App/App';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'actions';

const mapStateToProps = state => ({
  fields: state.fields,
  submitErrors: state.submit.submitErrors,
  submitValues: state.submit.submitValues,
});

const mapDispatchToProps = disathch => ({
  ...bindActionCreators(actions, disathch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
