import React from 'react';
import { ChartBullet } from '@patternfly/react-charts';

const SegmentedPrimaryMeasure = () => (
  <div style={{ height: '200px', width: '600px' }}>
    <ChartBullet
      ariaDesc="Storage capacity"
      ariaTitle="Bullet chart example"
      comparativeWarningMeasureData={[{name: 'Warning', y: 88}]}
      comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}
      constrainToVisibleArea
      height={200}
      labels={({ datum }) => `${datum.name}: ${datum.y}`}
      maxDomain={{y: 100}}
      padding={{
        bottom: 50,
        left: 150, // Adjusted to accommodate labels
        right: 50,
        top: 50
      }}
      primarySegmentedMeasureData={[{ name: 'Measure', y: 25 }, { name: 'Measure', y: 60 }]}
      primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}
      qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}
      qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
      subTitle="Measure details"
      title="Text label"
      width={600}
    />
  </div>
)
export default SegmentedPrimaryMeasure;