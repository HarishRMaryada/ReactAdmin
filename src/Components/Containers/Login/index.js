import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

//material imports
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";

//material ui
import { CssBaseline, Avatar, Paper, Button } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

//actions
import * as AuthActions from "../../../Auth/actions";

//redux-form
import validate from "./validate";

//components
import RequiredRenderTextField from "../../Presentators/Inputs/RequiredRenderTextField";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  logo: {
    width: 250,
    height: 75,
    padding: 10
  },
  footer: {
    marginTop: theme.spacing.unit * 40,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 4}px 0`
  },
  button: {
    margin: theme.spacing.unit
  },
  btnLogin: {
    background: theme.palette.primary
    // color: "white",
    // "&:hover": {
    //   background: theme.local.tealcolor
    // }
  },
  base:{
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    width:350
  }
});

class index extends Component {
  constructor(props) {
    super(props);    
    // this.handleForgotPassword = this.handleForgotPassword.bind(this);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }

  onLoginSubmit(values) {
    let user ={
      username :values.username,
      password:values.password,
      grant_type:'password',
      client_id:'evmax-SuperAdmin',
      client_secret:'y2w5jtCqhgYIo7MbJ4PlQF3QEet3mqOqc8Aq10'
    }   

    this.props.loginUser(user, (err, result) => {
      if (err) {
        this.setState({ error: "Submission Failed" });
      } else if (result) {
        this.setState({ error: null, success: true });
      }
    });
  }
  render() {
    const { classes } = this.props;
    return this.props.auth.isLoggedIn ? (
      <Redirect
        to={{
          pathname: "/"
        }}
      />
    ) : (
      <div>
        <main className={classes.main}>
          <CssBaseline />
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <form onSubmit={this.props.handleSubmit(this.onLoginSubmit)}>
              <div>
                <Field
                  className={classes.base}
                  name="username"
                  component={RequiredRenderTextField}
                  label="Email"
                />
                <Field
                  className={classes.base}
                  name="password"
                  component={RequiredRenderTextField}
                  label="Password"
                  type="password"
                />
              </div>
              <div>
                <Button
                  className={classNames(classes.button, classes.btnLogin)}
                  type="submit"
                >
                  Login
                </Button>
              </div>
            </form>
          </Paper>
        </main>
      </div>
    );
  }
}

index.propTypes = {
  classes: PropTypes.object.isRequired
};

let LoginForm = reduxForm({
  form: "LoginForm",
  validate
})(index);

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {
  loginUser: AuthActions.loginUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(LoginForm));
