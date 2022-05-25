import { fetchAllAuditLog, fetchAuditEventsByUser, fetchAuditUrisByUser, fetchNamespaces,fetchPodsByNamespcae } from '../store/actions/data'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SimpleChart from "./charts/simpleChart";
import { PieChart } from "./charts/piechart";
import { BarChart } from "./charts/barchart";
import { Container, Typography } from '@mui/material';
import MaterialTable from 'material-table'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
function _renderAuditEventCount(data){
  return(
    <div>
  {(data.audit_event_count_by_user.length != 0)? 
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
  return (<div>        {(data.audit_uri_count_by_user.length != 0)? (
    
    <Container maxWidth="sm">

    <BarChart title={" URI Access Distribuition"} legendPosition="left" datasetLabels={Object.keys(data.audit_uri_count_by_user)} labels={Object.keys(data.audit_uri_count_by_user)} datasetData={data.audit_uri_count_by_user}></BarChart>
    </Container>) : (<Box   display="flex"
justifyContent="center"
alignItems="center"
minHeight="100vh">
  <CircularProgress />
</Box>)
    }</div>)
}
function _renderTable(data){
  return (      <MaterialTable
    columns={[
      { title: 'Event', field: 'event-name' },
      { title: 'URI', field: 'event-uri' },
      { title: 'Date', field: 'date', type: 'date' },
      { title: 'Username', field: 'username' }
    ]}
    data={[{ 'event-name': 'Access', 'event-uri': '/api', date: 1987, username: "aradgonen" }]}
    title="Demo Title"
  />)
}
export default function Graphs() {
  const audit_event_count_by_user = useSelector((state) => state.data)
  const audit_uri_count_by_user = useSelector((state) => state.data)
  const dispatch = useDispatch();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(18),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  
  useEffect(()=> {
      dispatch(fetchAuditEventsByUser());
  },[]);
  useEffect(()=> {
    dispatch(fetchAuditUrisByUser());
},[]);
  return (
<Container>
<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
    {_renderTable()}
    </Item>
  </Grid>
</Grid>
</Container>
  );
}
