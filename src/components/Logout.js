import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuBar from '../components/MenuBar';
import { logoutUser } from '../Actions/AllActions';
import { connect } from 'react-redux';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  gapSmall: {
    marginTop:50,
  }
});

class Logout extends React.Component {

  render() {
    const { classes, dispatch } = this.props;
    console.log(classes);
    return (
      <div>
        <MenuBar/>
        <h1>Logout</h1>
        <Button onClick={() => dispatch(logoutUser())} variant="contained" color="primary" className={classes.button}>
              Logout
        </Button>
      </div>
    );
  }
}

Logout.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    const { credentials } = state.crudStudent;
    return {
        credentials
    };
}

export default connect(mapStateToProps)(withStyles(styles)(Logout));