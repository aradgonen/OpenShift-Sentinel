import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {piechartColorsGenerator} from './colorsGenerators'
ChartJS.register(ArcElement, Tooltip, Legend);




export function PieChart({labels = [], dataset = []}) {
  const {backgroundColor, borderColor} = piechartColorsGenerator(labels.length);
  const data = {
    labels: labels,
    data:  dataset,
    datasets: [
      {
        //label: '# of Votes',
        data: dataset,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  }
  return <Pie data={data} />;
}
