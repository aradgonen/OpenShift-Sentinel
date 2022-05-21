import React from "react";
import SimpleChart from "./charts/simpleChart";
import { PieChart } from "./charts/piechart";
import { BarChart } from "./charts/barchart";
import { Container } from '@mui/material';
import MaterialTable from 'material-table'



const Graphs = (props) => {
  
  return (
    <div>
      <SimpleChart></SimpleChart>

      <Container maxWidth="sm">
        <PieChart labels = {['marik', 'yoav', 'arad']} dataset = {[87, 9, 4]}></PieChart>
      </Container>
      <Container maxWidth="sm">
      <BarChart title="arad vs marik" legendPosition="left" datasetLabels={['arad', 'marik']} datasetData={[[4,2,5], [3,4,7]]} labels={['morning', 'afternoon', 'night']}></BarChart>
      </Container>
      <Container maxWidth="sm">
      <MaterialTable
          columns={[
            { title: 'Adı', field: 'name' },
            { title: 'Soyadı', field: 'surname' },
            { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
            { title: 'Doğum Yeri', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
          ]}
          data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
          title="Demo Title"
        />
        </Container>
    </div>
  );
};

export default Graphs;
