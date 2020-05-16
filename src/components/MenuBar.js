import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { connect } from 'react-redux';
import { allActions } from '../Actions/AllActions';

const styles = {
  menuItem: {
    marginRight: 15,
    color: '#fff',
    textDecoration: 'none'
  },
};

class MenuBar extends React.Component {
  handleLogout() {
    const { dispatch } = this.props;
    dispatch(allActions.logoutUser());
  }
  render() {
    const { classes } = this.props;
    console.log(this.props.auth)
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <a className={classes.menuItem} href="/">Home</a>
            {!this.props.auth.isAuthenticated &&
            <a className={classes.menuItem} href="/login">Login</a>
            }
            {this.props.auth.isAuthenticated &&
              <a className={classes.menuItem} href="/view-students">View Students</a>}
            {this.props.auth.isAuthenticated &&
              <a className={classes.menuItem} href="/add-student">Add Student</a>}
            {this.props.auth.isAuthenticated &&
              <a className={classes.menuItem} href="/logout">Logout</a>
            }
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(MenuBar));