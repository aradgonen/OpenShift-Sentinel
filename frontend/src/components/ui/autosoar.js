import React, { useEffect } from "react";
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { CircularProgress } from "@material-ui/core";
import { Typography } from "@mui/material";
import { getMessages } from "../../store/actions/websocket";
import { useDispatch, useSelector } from "react-redux";
import { _renderTable } from "../Graphs2";
import { fetchAllDeadKc } from "../../store/actions/data";

export default function AutoSoar(props) {
  const messages = useSelector((state) => state.ws.messages)
  const threats_history = useSelector((state) => state.data.all_dead_kc)
  const dead = useSelector((state) => state.ws.dead)
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(fetchAllDeadKc());
},[dispatch]);
  return (
    <div>
    {
      ((messages.length - dead.length) == 0) ? (<div>No Threats Being Handled Now</div>):(

        messages.map(message => {
          if(JSON.parse(message).alive){
          return (
<Card sx={{ maxWidth: 345 }} key={JSON.parse(message).id}>
    <CardHeader/>
    <Typography>{message}</Typography>
    <CardContent>
    <Box   display="flex"
justifyContent="center"
alignItems="center">
  <CircularProgress />
</Box>
    </CardContent>
  </Card>
          )}
        })
    )
      }
      {console.log(threats_history)}
      {_renderTable(threats_history,'Threats History',[
      { title: 'alive', field: 'alive' },
      { title: 'cve_attackComplexity', field: 'cve_attackComplexity' },
      { title: 'cve_impact', field: 'cve_impact' },
      { title: 'cve_userInteraction', field: 'cve_userInteraction'},
      { title: 'image', field: 'image'},
      { title: 'cve_score', field: 'cve_score'},
      { title: 'image', field: 'image'},
      { title: 'name', field: 'name'},
      { title: 'namespace', field: 'namespace'},
      { title: 'program', field: 'program'},
      { title: 'version', field: 'version'},
    ],"kc")}
      </div>
  );
}
