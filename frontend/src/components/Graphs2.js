import { fetchAllAuditLog, fetchAuditEventsByUser, fetchAuditUrisByUser, fetchNamespaces,fetchPodsByNamespcae } from '../store/actions/data'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SimpleChart from "./charts/simpleChart";
import { PieChart } from "./charts/piechart";
import { BarChart } from "./charts/barchart";
import { Container } from '@mui/material';
import MaterialTable from 'material-table'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function _renderGraphs(data) {
  console.log(data.audit_uri_count_by_user)
    return(
        <div>
        {/* <SimpleChart></SimpleChart> */}
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
        {(data.audit_uri_count_by_user.length != 0)? (
        <Container maxWidth="sm">
        <BarChart title="event type" legendPosition="left" datasetLabels={Object.keys(data.audit_event_count_by_user)} datasetData={Object.keys(data.audit_event_count_by_user)} labels={Object.keys(data.audit_event_count_by_user)}></BarChart>
        </Container>) : (<Box   display="flex"
  justifyContent="center"
  alignItems="center"
  minHeight="100vh">
      <CircularProgress />
    </Box>)
        }
      </div>
      // <Container maxWidth="sm">
      // <MaterialTable
      //     columns={[
      //       { title: 'Adı', field: 'name' },
      //       { title: 'Soyadı', field: 'surname' },
      //       { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
      //       { title: 'Doğum Yeri', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
      //     ]}
      //     data={tableData}
      //     title="Demo Title"
      //   />
      //   </Container>
    )
  }

export default function Graphs() {
  const audit_event_count_by_user = useSelector((state) => state.data)
  const audit_uri_count_by_user = useSelector((state) => state.data)
  const dispatch = useDispatch();

  useEffect(()=> {
      dispatch(fetchAuditEventsByUser());
  },[]);
  useEffect(()=> {
    dispatch(fetchAuditUrisByUser());
},[]);
  return (
    _renderGraphs(audit_event_count_by_user,audit_event_count_by_user,audit_uri_count_by_user,audit_uri_count_by_user)
  );
}
