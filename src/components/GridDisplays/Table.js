import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Message from '../Message/Message';
import Scroll from '../Scroll/Scroll';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';
const messageTableStyles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  headerText: {
    color: '#6b6a69',
    fontSize: 20,
    variant: 'h6'
  },
  '@media (min-width: 1024px)': {
    table: { minWidth: 700 }
  }
});

//global message counter to allow React to track messages by key
let messageCounter = 0;

//returns a message component from given message object
const messageGenerator = message => {
  return (
    <Message
      key={messageCounter++}
      messageText={message.message}
      messagePriority={message.priority}
    />
  );
};

/*lists an array of messages in a 2 column table*/
function MessageTableGrid({ classes, messages }) {
  let messageList = _.map(messages, messageGenerator);
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      spacing={24}
    >
      <Grid item xs={12}>
        <Scroll>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell align="center">
                    <Typography className={classes.headerText}>
                      Priority
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography className={classes.headerText}>
                      Message
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody data-testid="message-table">{messageList}</TableBody>
            </Table>
          </Paper>
        </Scroll>
      </Grid>
    </Grid>
  );
}

export default withStyles(messageTableStyles)(MessageTableGrid);
