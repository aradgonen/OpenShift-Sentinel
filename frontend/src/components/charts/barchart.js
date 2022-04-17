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


export function BarChart({labels = [], datasetData = [[]], datasetLabels = [] , title = '', legendPosition = ''}) {

    const tableLabels = [...labels]

    if (legendPosition !== 'top' &&
        legendPosition !== 'bottom' &&
        legendPosition !== 'left' &&
        legendPosition !== 'right') {
            legendPosition = 'top'
        }

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

      const datasets = []
      datasetLabels.forEach((label, datasetLabelsIndex) => {
          datasets.push({
              label: label,
              data: tableLabels.map((tableLable, index) => datasetData[datasetLabelsIndex][index]),
              backgroundColor: BarChartColorsGenerator(1)
          })
    });
    
    const data = {
        labels,
        datasets: datasets,
      };

      console.log(labels)

    return <Bar options={options} data={data} />;
}
