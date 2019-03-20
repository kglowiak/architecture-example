import { bindActionCreators } from 'redux';
import { compose, withProps } from 'recompose';

import { exampleAction } from 'store/application/actions';
import { HomeLayout } from './layout';
import { buttons } from './consts';
import { connect } from 'react-redux';

const withHomeProps = withProps(() => ({
  buttons,
}));

const mapDispatchToProps = dispatch => ({
  onButtonClick: () => dispatch(exampleAction('something')),
});

const Home = compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  withHomeProps,
)(HomeLayout);

export { Home };
