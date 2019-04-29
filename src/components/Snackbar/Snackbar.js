import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';

const styles = theme => ({
  snackbar: {
    margin: theme.spacing.unit
  }
});

const LongTextSnackbar = ({
  message,
  vertical = 'top',
  horizontal = 'center',
  snackStatus = true
}) => {
  return (
    <div>
      <Snackbar
        className={styles.snackbar}
        message={message.message}
        open={snackStatus}
        anchorOrigin={{ vertical, horizontal }}
      />
    </div>
  );
};

export default withStyles(styles)(LongTextSnackbar);
