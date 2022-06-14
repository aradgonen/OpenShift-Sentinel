import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

// const sock = new SockJS("http://localhost:8080/broadcast");
// let stompClient = Stomp.over(sock);
// sock.onopen = function(){
//   console.log('open');
// }

const subscribe_to_messages = () => {
  //   stompClient.connect({}, function (frame) {
  //   console.log('Connected: ' + frame);
  //   stompClient.subscribe('/topic/soar', function (greeting) {
  //     if(greeting.body.includes("open-alert")){
  //       return greeting.body
  //     }
  //     if(greeting.body.includes("close-alert")){
  //         return []
  //     }
  //   });
  // });
};


export default {
    subscribe_to_messages
};
