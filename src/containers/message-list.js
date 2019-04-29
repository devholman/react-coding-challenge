import React, { Component } from 'react';
import StyledButton from '../components/Button/Button';
import Snackbar from '../components/Snackbar/Snackbar';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import priority from '../constants';
import SimpleAppBar from '../components/Header/Header';
import MessageTableGrid from '../components/GridDisplays/Table';
import Api from '../api';

const snackbarQueue = [];
const mainStyles = {
  root: {
    flexGrow: 1,
    backgroundColor: '#A9a9a9'
  }
};

class MessageList extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      messages: [],
      currentMessage: {},
      snackbar: {
        message: '',
        visible: false,
        timer: 0
      }
    };
  }

  componentWillMount() {
    this.api = new Api({
      messageCallback: message => {
        this.messageCallback(message);
      }
    });
  }

  componentDidMount() {
    this.api.start();
  }

  /*adds a message to the beginning of the messages' state. If a message with an error status is processed,
  a snackbar is triggered. The snackbar timer is restarted if a 2nd error is processed 
  before the first error has completed*/
  messageCallback(message) {
    const { messages, snackbar } = this.state;
    if (message.priority === priority.error) {
      if (snackbar.timer > 0) {
        this.setState({
          snackbarTimer: clearTimeout(snackbar.timer)
        });
      }
      snackbarQueue.push(message);
      this.handleSnackbar();
    }
    this.setState({
      messages: [message].concat(messages),
      currentMessage: message
    });
  }

  /*starts  a new snackbar timer for 2 seconds*/
  handleSnackbar() {
    if (_.size(snackbarQueue) > 0) {
      this.setState({
        snackbar: {
          message: _.last(snackbarQueue),
          visible: true,
          timer: setTimeout(() => {
            this.setState({
              snackbar: { message: '', visible: false, timer: 0 }
            });
          }, 2000)
        }
      });
    }
  }

  //clears all messages from state
  handleClear() {
    this.setState({ messages: [] });
  }

  renderButton() {
    const isApiStarted = this.api.isStarted();
    return (
      <StyledButton
        variant="contained"
        data-testid="toggle-message-retrieval"
        action={() => {
          if (isApiStarted) {
            this.api.stop();
          } else {
            this.api.start();
          }
          this.forceUpdate();
        }}
        text={isApiStarted ? 'Stop Messages' : 'Start Messages'}
      />
    );
  }

  render() {
    const { messages, snackbar } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.root}>
          <SimpleAppBar />
          <Grid container direction="row" alignItems="center" justify="center">
            {this.renderButton()}
            <StyledButton
              variant="contained"
              action={() => this.handleClear()}
              text="Clear All Messages"
            />
          </Grid>
          <MessageTableGrid messages={messages} />
          {snackbar.message ? <Snackbar message={snackbar.message} /> : null}
        </div>
      </div>
    );
  }
}
export default withStyles(mainStyles)(MessageList);
