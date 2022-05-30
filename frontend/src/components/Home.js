import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BarChart } from './charts/barchart';

const Home = (props) => {
  
const chartData = {
  arad: {
    '/api/route/1/2/3':5,
    '/api/route/1/3/5':30,
    '/api/another/route/1/v1/hello':60,
    '/api/api?/wow/route3/4/5': 55
  },
  yoav: {
    '/api/route/1/2/3':5,
    '/api/route/1/3/5':30,
    '/api/api?/wow/route3/4/5': 55,
    '/api/power/rangers/5':30
  }
}
  return (
  <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography variant="h4" component="div" gutterBottom>
        OpenShift-Sentinel - World's First SIEM For RedHat OpenShift!
      </Typography>

    {/* chartLables is not a must! see the compenent for more explanation */}
    <BarChart legendPosition='top' title='api router chart' chartData={chartData} chartLables={['/api/api?/wow/route3/4/5']}></BarChart>
</Box>
  );
};

export default Home;
