import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import MuiAlert from '@mui/material/Alert';
import SockJsClient from 'react-stomp';

const AlertPopup = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

export default function Alert() {
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);
  const [messages, setMassages] = React.useState([]);
  const [typedMessage, setTypedMessage] = React.useState("");
  const [name, setName] = React.useState("");

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


const sendMessage = () => {
    this.clientRef.sendMessage('/app/user-all', JSON.stringify({
        name: this.state.name,
        message: this.state.typedMessage
    }));
};

const displayMessages = () => {
    return (
        <div>
            {this.state.messages.map(msg => {
                return (
                    <div>
                        {this.state.name == msg.name ?
                            <div>
                                <p className="title1">{msg.name} : </p><br/>
                                <p>{msg.message}</p>
                            </div> :
                            <div>
                                <p className="title2">{msg.name} : </p><br/>
                                <p>{msg.message}</p>
                            </div>
                        }
                    </div>)
            })}
        </div>
    );
};
  return (
    <div>
      {/* <Button onClick={handleClick(TransitionRight)}>Test Alert</Button> */}
      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        key={transition ? transition.name : ''}>
                  <AlertPopup severity="error">Security Threat Detected - Handling Autonomously</AlertPopup>
</Snackbar>
<SockJsClient url='http://192.168.1.228:8088/websocket-chat/'
                              topics={['/topic/user']}
                              onConnect={() => {
                                  console.log("connected");
                              }}
                              onDisconnect={() => {
                                  console.log("Disconnected");
                              }}
                              onMessage={(msg) => {
                                  var jobs = this.state.messages;
                                  jobs.push(msg);
                                  this.setState({messages: jobs});
                                  console.log(this.state);
                              }}
                              ref={(client) => {
                                  this.clientRef = client
                              }}/>
    </div>
  );
}
