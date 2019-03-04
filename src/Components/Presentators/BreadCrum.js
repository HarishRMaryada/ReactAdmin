
import React, { Component } from 'react'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";



//material ui 
import Typography from '@material-ui/core/Typography'
import RightArrow from '@material-ui/icons/KeyboardArrowRight'

const styles = theme => ({
   
    typographyColor:{
        backgroundColor:theme.palette.primary,
        color:theme.palette.primary,
     },
     topSpace: {
      margin: theme.spacing.unit,
    },
    link:{
        color: theme.palette.primary,
        '&:hover': {
            color: theme.palette.primary,
          },
    }  
  });
  


class BreadCrum extends Component {  
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
 
  render() {
    const { classes,breadCrum } = this.props;
    let path = breadCrum.split("/")

    return (
        <Typography
        className={classNames(classes.typographyColor,classes.topSpace)}                                               
        variant="body1" component="h6"
        dir="rtl"
        >
                 
        <Link to={this.props.baseUrl+path[1]} className={classes.link}>
        {path[1]?this.capitalizeFirstLetter(path[1]):'Dashboard'}
        </Link>
        {
            path[2] ? <RightArrow />:''
        }
        
                 
        <Link to={`${this.props.baseUrl}${path[1]}/${path[2]}/`} className={classes.link}>
        {path[2] ? this.capitalizeFirstLetter(path[2]):''}
        </Link>
        
        {/* {
            path[3] ? <RightArrow />:''
        }        
        

        <Link to={`${this.props.baseUrl}${path[1]}/${path[2]}/${path[3]}`} className={classes.link}>
        {path[3]}
        </Link>  */}

        </Typography>
    )
  }
}

export default withStyles(styles)(BreadCrum) 
