import React from 'react';
import { View, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const Chart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        data: [30, 45, 28, 80, 99],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Line color
        strokeWidth: 2, // Optional: Line thickness
      },
    ],
  };

  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2, // Number of decimal places
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Label color
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  return (
    <View>
      <Text>Mood Trend Visualization</Text>
      <LineChart
        data={data}
        width={Dimensions.get('window').width - 40} // Dynamically adjust width
        height={220}
        chartConfig={chartConfig}
        bezier // Optional: Smooth curve
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default Chart;