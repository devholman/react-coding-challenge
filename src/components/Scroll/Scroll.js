import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const scrollStyles = {
  root: {
    overflowY: 'scroll',
    height: '35rem',
    padding: '1rem',
    margin: '1rem 0',
    backgroundColor: '#8eaebd',
    boxShadow: '0px 0px 20px 2px rgba(0,0,0,0.75)'
  }
};

//reusable scroll component
const Scroll = props => {
  const { classes } = props;
  return <div className={classes.root}>{props.children}</div>;
};

export default withStyles(scrollStyles)(Scroll);
