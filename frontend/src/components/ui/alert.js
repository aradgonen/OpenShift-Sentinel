import React, { useEffect } from "react";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import MuiAlert from '@mui/material/Alert';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import {
  StompSessionProvider,
  useSubscription,
} from "react-stomp-hooks";
import { setMessages,deadMessages } from "../../store/actions/websocket";
import { useDispatch, useSelector } from "react-redux";
const AlertPopup = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

// const sock = new SockJS("http://localhost:8080/broadcast");
// let stompClient = Stomp.over(sock);
// sock.onopen = function(){
//   console.log('open');
// }



export default function Alert() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleOpen = (val) => {
    setOpen(val)
  }
  const handleClose = () => {
    setOpen(false);
  };
  // stompClient.connect({}, function (frame) {
  //   console.log('Connected: ' + frame);
  //   stompClient.subscribe('/topic/public', function (greeting) {
  //     if(greeting.body.includes("show")){
  //       setOpen(true);
  //     }
  //     if(greeting.body.includes("hide")){
  //       setOpen(false);
  //     }
  //   });
  // });
  useSubscription("/topic/public", (message) => (handleOpen(message.body.includes("show"))));
  useSubscription("/topic/soar", (message) => dispatch(setMessages(message.body)));
  useSubscription("/topic/dead", (message) => dispatch(deadMessages(message.body)));


  return (
    <div>
      {/* <Button onClick={handleClick(TransitionRight)}>Test Alert</Button> */}
        <Snackbar
          open={open}
          onClose={handleClose}
          // TransitionComponent={transition}
          // key={transition ? transition.name : ''}
          >
        <AlertPopup severity="error">Security Threat Detected - Handling Autonomously</AlertPopup>
      </Snackbar>
    </div>
  );
}