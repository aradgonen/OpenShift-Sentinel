import React, { useState} from 'react'

import DeployService from '../../services/deploy.service';

import { Button, Grid, styled, Paper } from '@mui/material'
import MaterialTable from 'material-table'

import { default  as NotDetaimiedIcon } from '@mui/icons-material/Circle';
import { default   as ChangedIcon } from '@mui/icons-material/CheckCircle';
import { default  as UnchangedIcon } from '@mui/icons-material/PauseCircle';
import { default  as FailedIcon }  from '@mui/icons-material/DoNotDisturbOn';

export default function ComplianceDeployPage({theme}) {

    const notDeterminedStatus = 'ND'
    const changedStatus = 'Applied'
    const unchangedStatus = 'Non Changed'
    const failedStatus = 'Failed'

    let [tableData, setTableData] = useState([
        {policyName:"namespace/rhacm-policies",status: notDeterminedStatus, icon: <NotDetaimiedIcon/>},
        {policyName: "application.app.k8s.io/rhacm-policies",status: notDeterminedStatus, icon:  <NotDetaimiedIcon/>},
        {policyName:"channel.apps.open-cluster-management.io/rhacm-policies",status:notDeterminedStatus, icon:  <NotDetaimiedIcon/>},
        {policyName:"subscription.apps.open-cluster-management.io/rhacm-policies-subscription",status:notDeterminedStatus, icon:  <NotDetaimiedIcon/>},
        {policyName:"placementrule.apps.open-cluster-management.io/rhacm-policies-placement",status:notDeterminedStatus, icon:  <NotDetaimiedIcon/>}
    ]);
    

    const onDeployClickHandler = () => {

        console.log('deploying')
        deploy()
    }

    async function deploy () {
        let newTableData = [];
        let deployment = await DeployService.deployAllPolicies()

        // mapping all the deployment to their category
        // changed
        // unchange
        // failed

        
        deployment.data["changed"].map((policy) => {
            newTableData.push({policyName: policy, status: changedStatus , icon: <ChangedIcon/>})
        })
        deployment.data["unchanged"].map((policy) => {
            newTableData.push({policyName: policy, status: unchangedStatus , icon: <UnchangedIcon/>})
        })
        deployment.data["failed"].map((policy) => {
            newTableData.push({policyName: policy, status: failedStatus , icon: <FailedIcon/>})
        })

        setTableData([...newTableData]);
    }

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#808080',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    let policiesTable = <MaterialTable
    columns={[
    { title: 'Policy', field: 'policyName' },
    { title: 'Status', field: 'status' },
    { title: 'Status Icon', field: 'icon' },
    ]}
    data={tableData}
    title="Polices"
    />

    return(
        <div>
            <Grid container spacing={1}>
                <Grid item xs={2}/>
                <Grid item xs={8}>
                {policiesTable}
                    <Grid container spacing={1}>
                        <Grid item xs={2}/>
                        <Grid item xs={8}>
                            <Button variant="outlined"
                                style={{maxWidth: '750px', minWidth: '750px', textAlign: 'center'}}
                                onClick = {onDeployClickHandler}>
                                    DEPLOY
                            </Button>
                        </Grid>
                        <Grid item xs={2}/>
                    </Grid>
                </Grid>
                <Grid item xs={2}/>
            </Grid>
        </div>
    )
}