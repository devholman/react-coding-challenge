import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import priorityMap from '../../constants';

const styles = {
  messagePriority: {
    fontSize: 16,
    color: 'inherit'
  },
  messageText: {
    fontSize: 16,
    color: 'inherit'
  }
};

/*uses the message priority mappings to determine priority color of a message.
will insert a table row for message priority and message text
the priority column will display the corresponding color with priority text for accessibilty purposes*/

const Message = ({ messageText, messagePriority, classes }) => {
  const { error, warning } = priorityMap;
  let priorityText = Object.keys(priorityMap).filter(
    status => messagePriority === priorityMap[status]
  );
  let backgroundColor;
  switch (messagePriority) {
    case error: {
      backgroundColor = '#F56236';
      break;
    }
    case warning: {
      backgroundColor = '#FCE788';
      break;
    }
    default: {
      backgroundColor = '#88FCA3';
    }
  }
  return (
    <TableRow className={'message-row'}>
      <TableCell align="center" style={{ backgroundColor: backgroundColor }}>
        <Typography
          variant="h6"
          data-testid={'message-priority'}
          className={classes.messagePriority}
        >
          {`${priorityText} (${messagePriority})`}
        </Typography>
      </TableCell>
      <TableCell align="left">
        <Typography
          data-testid={'message-text'}
          variant="h6"
          className={classes.messageText}
        >
          {messageText}
        </Typography>
      </TableCell>
    </TableRow>
  );
};

export default withStyles(styles)(Message);
