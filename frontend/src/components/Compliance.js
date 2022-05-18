import React, {useEffect} from 'react'
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

    let tableData = [];
    useEffect(async () => {
        let data = await PolicyService.getAllPolicies()
        console.log(data)
    }, [])


    let policiesTable = <MaterialTable
    columns={[
      { title: 'Policy', field: 'policyName' },
      { title: 'Path', field: 'path', hidden: true }
    ]}
    data={tableData}
    title="Polices"
  />

    return(
        <Grid container spacing={2} >
            <Grid item xs={0.5}></Grid>
            <Grid item xs={3.5}>
                {policiesTable}
            </Grid>
            <Grid item xs={7.5}>
                <Item>xs=7.5</Item>
            </Grid>
            <Grid item xs={0.5}></Grid>
        </Grid>

    )
}