import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {Link,Route } from "react-router-dom";



//material ui
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Drawer,
  Typography,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
//material Icons
import MenuIcon from "@material-ui/icons/Menu";
import PowerSettingsNew from "@material-ui/icons/PowerSettingsNew";
import DashboardIcon from "@material-ui/icons/Store";

//store
import store from "../../../store";

//actions
import * as AuthActions from "../../../Auth/actions";

//components
import Dashboard from '../../Dashboard'
import BreadCrum from '../../Presentators/BreadCrum'

let menuArray = [{ link: "/", name: "Dashboard", icon: DashboardIcon }];

const drawerWidth = 260;
const styles = theme => ({
  root: {
    display: "flex"
  },
  grow: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: "#469671",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9 + 1
    }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
});

class Layout extends Component {
  state = {
    open: true
  };
  handleDrawer = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open
          })}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawer}
              className={classNames(classes.menuButton)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={classes.grow}
            >
              React Admin
            </Typography>
            <IconButton
              color="inherit"
              className={classNames(classes.menuButton)}
            >
              <PowerSettingsNew
                onClick={() => {
                  store.dispatch(AuthActions.logout());
                  this.props.history.push("/login");
                }}
              />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open
            })
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            {/* <img className={classes.logo} src={logo} alt={"logo"} /> */}
          </div>
          <Divider />
          <List>
          {menuArray.map((menu, index) => (
            <Link to={menu.link} key={menu.name}>
                <ListItem button >
                <ListItemIcon>{<menu.icon/>}</ListItemIcon>
                <ListItemText primary={menu.name} />
                </ListItem>
            </Link>            
        ))} 
          </List>
        </Drawer>
        <main className={classes.content}>
        <div className={classes.toolbar} />
        <BreadCrum
            breadCrum={this.props.location.pathname}
            baseUrl={this.props.match.url}
          />
        <Route path="/" exact={true} component={Dashboard} />
        <Route path="/users" exact={true} component={Dashboard} />
        </main>
      </div>
    );
  }
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Layout));
