import { fetchAllAudit, fetchAuditEventsByUser, fetchAuditUrisByUser } from '../store/actions/data'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PieChart } from "./charts/piechart";
import { BarChart } from "./charts/barchart";
import { Container, Typography } from '@mui/material';
import MaterialTable from 'material-table'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

function _renderAuditEventCount(data){
  return(
    <div>
  {(data.audit_event_count_by_user.length !== 0)? 
    (<Container maxWidth="sm">
      <PieChart labels = {Object.keys(data.audit_event_count_by_user)} dataset = {Object.values(data.audit_event_count_by_user)}></PieChart>
    </Container>) : (<Box   display="flex"
justifyContent="center"
alignItems="center"
minHeight="100vh">
  <CircularProgress />
</Box>)
    }
      </div>
  )
}
function _renderAccessCount(data){
  return (<div>        {(data.audit_uri_count_by_user.length !== 0)? (
    
    <BarChart title={" URI Access Distribuition"} legendPosition="left" chartData={data.audit_uri_count_by_user}></BarChart>
) : (<Box   display="flex"
justifyContent="center"
alignItems="center"
minHeight="100vh">
  <CircularProgress />
</Box>)
    }</div>)
}
export function _renderTable(data){
  console.log(data.all_audit_events)
  data = data.map(line => {
    return ({'event-name':line.stage, 'event-uri':line.requestURI, date:line.requestReceivedTimestamp, username:line.user.username})
  })
  return (      <MaterialTable
    columns={[
      { title: 'Event', field: 'event-name' },
      { title: 'URI', field: 'event-uri' },
      { title: 'Date', field: 'date', type: 'date' },
      { title: 'Username', field: 'username' }
    ]}
    data={data}
    title="All Audit Events"
  />)
}
export default function Graphs() {
  const audit_event_count_by_user = useSelector((state) => state.data)
  const audit_uri_count_by_user = useSelector((state) => state.data)
  const all_audit_events = useSelector((state) => state.data.all_audit_events)
  const dispatch = useDispatch();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  useEffect(()=> {
      dispatch(fetchAuditEventsByUser());
  },[dispatch]);
  useEffect(()=> {
    dispatch(fetchAuditUrisByUser());
},[dispatch]);
useEffect(() => {
  dispatch(fetchAllAudit());
},[dispatch])
  return (
<Container>
<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
  <Grid item xs={6}>
    <Item>
      <Typography>Audit Event Count By User</Typography>
      {_renderAuditEventCount(audit_event_count_by_user)}
      </Item>
  </Grid>
  <Grid item xs={6}>
  <Item>
    <Typography>URI Access Count By User</Typography>
    {_renderAccessCount(audit_uri_count_by_user)}
    </Item>
  </Grid>
  <Grid item xs={12}>
  <Item>
    <Typography>All Audit Events</Typography>
    {_renderTable(all_audit_events)}
    </Item>
  </Grid>
</Grid>
</Container>
  );
}
