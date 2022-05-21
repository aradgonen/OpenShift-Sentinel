import React, {useEffect, useState} from 'react'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import ComplianceYamlPage from './Compliance/ComplianceYamlPage';
import ComplianceDeployPage from './Compliance/ComplianceDeployPage';




export default function Compliance ({theme}) {
    
    const yamlPage = <ComplianceYamlPage/>
    const deployPage = <ComplianceDeployPage/>

    const yamlPageText = 'ComplianceYamlPage'
    const deployPageText = 'ComplianceDeployPage'

    let [currentPage, setCurrentPage]  = useState(deployPage);  


    const changeCurrentPageHanlder = (event) => {
        switch (event.target.value) {
            case yamlPageText: setCurrentPage(yamlPage); break
            case deployPageText: setCurrentPage(deployPage); break
        }

    }
    const dropDownPageList = <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
            View
        </InputLabel>
        <NativeSelect
            defaultValue={yamlPage}
            inputProps={{
            name: 'view',
            id: 'uncontrolled-native',
            }}
            onChange={changeCurrentPageHanlder}
        >
            <option value={deployPageText}>{deployPageText}</option>
            <option value={yamlPageText}>{yamlPageText}</option>
        </NativeSelect>
    </FormControl>



    return(
        <div>
            {dropDownPageList}
            {currentPage}
        </div>
        
    )
}