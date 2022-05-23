import { fetchAllAuditLog, fetchNamespaces,fetchPodsByNamespcae } from '../store/actions/data'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SimpleChart from "./charts/simpleChart";
import { PieChart } from "./charts/piechart";
import { BarChart } from "./charts/barchart";
import { Container } from '@mui/material';
import MaterialTable from 'material-table'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function _renderGraphs(lineData, pieData, barData, tableData) {
    return(
        <div>
        {/* <SimpleChart></SimpleChart> */}
        {(pieData.audit.length != 0)? 
        (<Container maxWidth="sm">
          <PieChart labels = {Object.keys(pieData.audit)} dataset = {Object.values(pieData.audit)}></PieChart>
        </Container>) : (<Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>)
        }
        {/* <Container maxWidth="sm">
        <BarChart title="event type" legendPosition="left" datasetLabels={barData.datasetlabels} datasetData={barData.dataset} labels={barData.labels}></BarChart>
        </Container>
        <Container maxWidth="sm">
        <MaterialTable
            columns={[
              { title: 'Adı', field: 'name' },
              { title: 'Soyadı', field: 'surname' },
              { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
              { title: 'Doğum Yeri', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
            ]}
            data={tableData}
            title="Demo Title"
          />
          </Container> */}
      </div>
    )
  }

export default function Graphs() {
  const audit = useSelector((state) => state.data)
  const dispatch = useDispatch();

  useEffect(()=> {
      dispatch(fetchAllAuditLog());
  },[]);

  return (
    _renderGraphs(audit,audit,audit,audit)
  );
}
