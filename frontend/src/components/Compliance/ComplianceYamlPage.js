import React, {useEffect, useState} from 'react'
import MaterialTable from 'material-table'
import { Container, Grid, Paper, styled, Button } from '@mui/material';
import PolicyService from '../../services/policy.service'
import YamlEditor from './YamlEditor';
import Item from './Item';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function ComplianceYamlPage({theme}) {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#808080',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    let [tableData, setTableData]  = useState([]);  
    let [currentPolicy, setCurrentPolicy]  = useState('');
    let [currentPolicyContent, setcurrentPolicyContent]  = useState('defualt policy content');

    useEffect(async () => {
        let tempTableData = [];
        let data = await PolicyService.getAllPolicies()
        data.data["yaml-files"].map((file, index) => {
            tempTableData.push({policyName: file["file"], path: file["path"], "repo": file["repo"]})
        })
        setTableData([...tempTableData]);
    }, [])

    useEffect(async () => {
        if(currentPolicy !== '') {
            let data = await PolicyService.getPolicyContent(currentPolicy)
            setcurrentPolicyContent(data["data"]["content"])
        }
    }, [currentPolicy])

    const policyChangeHandler = (path='') => {
        setCurrentPolicy(path)
    }

    let policiesTable = <MaterialTable
    columns={[
    { title: 'Policy', field: 'policyName' },
    { title: 'Path', field: 'path', hidden: true },
    { title: 'Repo', field: 'repo', hidden: true }
    ]}
    data={tableData}
    title="Polices"
    actions={[
        // {
        //   icon: 'ArrowForwardIosIcon',
        // }
    ]}
    detailPanel={rowData => {
        policyChangeHandler(rowData["path"])
        return (
                <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Item>{rowData["path"]}</Item>
                </Grid>
                <Grid item xs={12}>
                    <Item>{rowData["repo"]}</Item>
                </Grid>
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
                <YamlEditor yaml={currentPolicyContent}/>
            </Grid>
            <Grid item xs={0.5}></Grid>
        </Grid>

    )
}
