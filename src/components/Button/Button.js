import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  mainButton: {
    backgroundColor: '#76323f',
    color: '#FFFFFF',
    margin: theme.spacing.unit,
    marginTop: 15,
    '&:hover': {
      background: '#565656'
    }
  }
});

const StyledButton = ({ classes, action, variant, text }) => {
  return (
    <Grid item>
      <Button variant={variant} onClick={action} className={classes.mainButton}>
        <Typography data-testid="styled-button" color="inherit">
          {text}
        </Typography>
      </Button>
    </Grid>
  );
};

export default withStyles(styles)(StyledButton);
