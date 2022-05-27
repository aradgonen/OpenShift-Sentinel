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

    
</Box>
  );
};

export default Home;
