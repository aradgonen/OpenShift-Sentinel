import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BarChart } from './charts/barchart';

const Home = (props) => {
  
  return (
  <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography variant="h4" component="div" gutterBottom>
        OpenShift-Sentinel - World's First SIEM For RedHat OpenShift!
      </Typography>

      <BarChart title="arad vs marik" legendPosition="left" datasetLabels={['arad', 'marik']} datasetData={[[4,2,5], [3,4,7]]} labels={['morning', 'afternoon', 'night']}></BarChart>
      
</Box>
  );
};

export default Home;
