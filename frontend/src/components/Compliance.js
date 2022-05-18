import React, {useEffect, useState} from 'react'
import MaterialTable from 'material-table'
import { Container, Grid, Paper, styled } from '@mui/material';
import PolicyService from '../services/policy.service'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function Compliance ({theme}) {


    let [tableData, setTableData]  = useState([]);  
    let [currentPolicy, setCurrentPolicy]  = useState('');  
    useEffect(async () => {
        let tempTableData = [];
        let data = await PolicyService.getAllPolicies()
        data.data["yaml-files"].map((file, index) => {
            tempTableData.push({policyName: file["file"], path: file["path"], "repo": file["repo"]})
        })
        setTableData([...tempTableData]);
    }, [])


    let policiesTable = <MaterialTable
    columns={[
      { title: 'Policy', field: 'policyName' },
      { title: 'Path', field: 'path', hidden: true },
      { title: 'Repo', field: 'repo', hidden: true }
    ]}
    data={tableData}
    title="Polices"
    detailPanel={rowData => {
        console.log(rowData)
        return (
                <Grid container spacing={1} >
                <Grid item xs={0.5}></Grid>
                <Grid item xs={5}>
                <Item>{rowData["path"]}</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>{rowData["repo"]}</Item>
                </Grid>
                <Grid item xs={0.5}></Grid>
            </Grid>
        )
      }}
    onRowClick={(event, rowData, detailPanel ) => detailPanel(rowData)}
  />

  const onPolicyRowHandle = (policy) => {
      setCurrentPolicy(policy)
      console.log(currentPolicy)
  }

    return(
        <Grid container spacing={2} >
            <Grid item xs={0.5}></Grid>
            <Grid item xs={5}>
                {policiesTable}
            </Grid>
            <Grid item xs={6}>
                <Item>6</Item>
            </Grid>
            <Grid item xs={0.5}></Grid>
        </Grid>

    )
}