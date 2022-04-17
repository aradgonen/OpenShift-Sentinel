import React from "react";
import SimpleChart from "./charts/simpleChart";
import { PieChart } from "./charts/piechart";
import { BarChart } from "./charts/barchart";
import { Container } from '@mui/material';


const Graphs = (props) => {

  return (
    <div>
      <SimpleChart></SimpleChart>

      <Container maxWidth="sm">
        <PieChart labels = {['marik', 'yoav', 'arad']} dataset = {[87, 9, 4]}></PieChart>
      </Container>
      <BarChart title="arad vs marik" legendPosition="left" datasetLabels={['arad', 'marik']} datasetData={[[4,2,5], [3,4,7]]} labels={['morning', 'afternoon', 'night']}></BarChart>
    </div>
  );
};

export default Graphs;
