import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuBar from '../components/MenuBar';
import { allActions } from '../Actions/AllActions';
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

class Login extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: ''
      };
  }

  handleChange(e) {
      this.setState({...this.state, [e.target.name]: e.target.value})
  }

  handleSubmit(e) {
      e.preventDefault();
      console.log(this.state)
      console.log("this props")
      console.log(this.props.dispatch)
      const { dispatch } = this.props;
      dispatch(allActions.loginUser(this.state));
      this.setState({
          email: '',
          password: ''
      });
  }

  render() {
    const { classes } = this.props;
    console.log(classes);
    return (
      <div>
        <MenuBar/>
        <h1>Login</h1>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <TextField name="email" value={this.state.firstName} label="Email" className={classes.input} inputProps={{'aria-label': 'Description',}} onChange={(e)=>this.handleChange(e)}/><br/>
          <TextField name="password" value={this.state.lastName} label="Password" className={classes.input} inputProps={{'aria-label': 'Description',}} type="password" onChange={(e)=>this.handleChange(e)}/>
          <div>
            <Button type="submit" variant="contained" color="primary" className={classes.button}>
              Login
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    const { credentials } = state.crudStudent;
    return {
        credentials
    };
}

export default connect(mapStateToProps)(withStyles(styles)(Login));