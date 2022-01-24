import React from 'react';
import { ChartPie } from '@patternfly/react-charts';

const BasicWithRightAlignedLegend = () => (
  <div style={{ height: '230px', width: '350px' }}>
    <ChartPie
      ariaDesc="Average number of pets"
      ariaTitle="Pie chart example"
      constrainToVisibleArea={true}
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      height={230}
      labels={({ datum }) => `${datum.x}: ${datum.y}`}
      legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
      legendOrientation="vertical"
      legendPosition="right"
      padding={{
        bottom: 20,
        left: 20,
        right: 140, // Adjusted to accommodate legend
        top: 20
      }}
      width={350}
    />
  </div>
)
export default BasicWithRightAlignedLegend;