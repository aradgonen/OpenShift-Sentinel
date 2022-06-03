import React, { useEffect } from "react";
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { CircularProgress } from "@material-ui/core";
import { Typography } from "@mui/material";

const sock = new SockJS("http://localhost:8080/broadcast");
let stompClient = Stomp.over(sock);
sock.onopen = function(){
  console.log('open');
}



export default function AutoSoar(props) {

  const [messages , setMessages] = React.useState([]);


  stompClient.connect({}, function (frame) {
    console.log('Connected: ' + frame);
    stompClient.subscribe('/topic/public', function (greeting) {
      if(greeting.body.includes("open-alert")){
        setMessages(greeting.body)
      }
      if(greeting.body.includes("close-alert")){
          setMessages([])
      }
    });
  });
  

  return (
      (messages.length == 0) ? (<div>No Threats Being Handled Now</div>):(
    <Card sx={{ maxWidth: 345 }}>
    <CardHeader/>
    <Typography>{(JSON.parse(messages).message)}</Typography>
    <CardContent>
    <Box   display="flex"
justifyContent="center"
alignItems="center">
  <CircularProgress />
</Box>
    </CardContent>
  </Card>)
  );
}