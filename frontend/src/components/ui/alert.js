import React, { useEffect } from "react";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import MuiAlert from '@mui/material/Alert';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
const AlertPopup = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

const sock = new SockJS("http://localhost:8080/broadcast");
let stompClient = Stomp.over(sock);
sock.onopen = function(){
  console.log('open');
}



export default function Alert() {
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);
  const [messages , setMessages] = React.useState([]);
  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  stompClient.connect({}, function (frame) {
    console.log('Connected: ' + frame);
    stompClient.subscribe('/topic/public', function (greeting) {
      if(greeting.body.includes("show")){
        setOpen(true);
      }
      if(greeting.body.includes("hide")){
        setOpen(false);
      }
    });
  });
  

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
    </div>
  );
}