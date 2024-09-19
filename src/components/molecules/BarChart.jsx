import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
} from "victory";

const BarChart = ({
  data,            // Array of data to be displayed in the chart
  xAxisLabels,     // Array of labels for the x-axis
  xKey,            // Key for x-axis values (e.g., "month")
  yKey,            // Key for y-axis values (e.g., "earnings")
  barColor = "#8FBFFF",  // Bar color (optional)
  barWidth = 8,    // Bar width (optional)
  animationConfig, // Animation configuration (optional)
  axisStyles,      // Axis styles (optional)
  chartPadding = { x: 20 }  // Chart padding (optional)
}) => {

  return (
    <div>
      <VictoryChart
        domainPadding={chartPadding}
      >
        {/* X Axis */}
        <VictoryAxis
          tickValues={xAxisLabels}
          style={{
            axis: { stroke: "none" },
            tickLabels: { fontSize: 10 },
            ...axisStyles?.xAxis
          }}
        />

        {/* Y Axis */}
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: "none" },
            tickLabels: { fontSize: 10 },
            ...axisStyles?.yAxis
          }}
        />

        {/* Bar Component */}
        <VictoryBar
          animate={animationConfig || {
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          cornerRadius={4}
          barWidth={barWidth}
          style={{
            data: { fill: barColor, width: barWidth },
          }}
          data={data}
          x={xKey}
          y={yKey}
        />
      </VictoryChart>
    </div>
  );
};

export default BarChart;
