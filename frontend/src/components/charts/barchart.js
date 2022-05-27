import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {BarChartColorsGenerator} from './colorsGenerators'
//import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

/**
 * EXMAPLE DATA FOR THIS COMPONENT
 * const arad_data = {
    arad: {
      '/api':5,
      '/routes':3
    },
    yoav: {
      '/api':7,
      '/routes':4
    }

    const arad_labels = ['/api', '/routes']
  }*/


export function BarChart({chartLables = [], chartData = {}, title = '', legendPosition = ''}) {

    const tableXAsixLables = [...chartLables]

    // The keys of the json - in the example - the users
    // for each user - creates it's data for each legend
    const dataSetKeys = Object.keys(chartData) 
    /**const legendLabels = [...dataSetKeys] EXPLANATION - THE dataSetKeys are the legend Labels - ie the users */

    // the data for the table
    // each keys ie user, has it's own data (for each route)
    const dataSetKeysData = {...chartData}


    // setting the legend position
    if (legendPosition !== 'top' &&
        legendPosition !== 'bottom' &&
        legendPosition !== 'left' &&
        legendPosition !== 'right') {
            legendPosition = 'top'
        }

    // setting the options
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: legendPosition,
          },
          title: {
            display: true,
            text: title,
          },
        },
      };


      // this function creates the table data for each legend - 
      // i.e - for each legend/user, creates it's data for each axis label (route)
      // for example - 
      // for arad cretea = 
      /**
       * {
       *  label:arad,
       *  data: [
       *    5, //for /api
       *    3, //for /route
       *  ]
       * }
       */
      // same for yoav, and then create an array that contains both

      // creates the dataset 
      const finalDatasets = []

      // for each key ie user
      dataSetKeys.forEach((dataSetKey) => {
        // pushing the data for that user
        finalDatasets.push({
              label: dataSetKey, //ie same as legend - a user
              data: tableXAsixLables.map((axieLabel) => { return dataSetKeysData [dataSetKey][axieLabel] }), //for each axieLabel - gets the axieLabel number - /api, gets the data in {user:{'/api':number}}
              backgroundColor: BarChartColorsGenerator(1),
          })
    });

    // in the final data that is sent to the react-chartjs-2 the names must be as follow
    // setting the name labels only here for readabillity of the code
    const labels = [...tableXAsixLables]
    const tableFinalData = {
        labels,
        datasets: finalDatasets,
      };

    
      
    return <Bar options={options} data={tableFinalData} />;
}
