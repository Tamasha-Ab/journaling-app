// import React from 'react';
// import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
// import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';
// import { useJournalContext } from '../context/JournalContext';

// export default function Dashboard() {
//   const { entries } = useJournalContext();

//   // Mood Data for Pie Chart
//   const moodData = {
//     labels: ['Happy', 'Neutral', 'Sad'],
//     datasets: [
//       {
//         data: [
//           entries.filter((entry) => entry.mood === 'Happy').length,
//           entries.filter((entry) => entry.mood === 'Neutral').length,
//           entries.filter((entry) => entry.mood === 'Sad').length,
//         ],
//       },
//     ],
//   };

//   // Journal Entry Frequency Data for Bar Chart
//   const frequencyData = {
//     labels: Object.keys(
//       entries.reduce<Record<string, number>>((acc, entry) => {
//         acc[entry.date] = (acc[entry.date] || 0) + 1;
//         return acc;
//       }, {})
//     ),
//     datasets: [
//       {
//         data: Object.values(
//           entries.reduce<Record<string, number>>((acc, entry) => {
//             acc[entry.date] = (acc[entry.date] || 0) + 1;
//             return acc;
//           }, {})
//         ),
//       },
//     ],
//   };

//   return (
//     <ScrollView style={styles.container}>
//       {/* Mood Trends Visualization */}
//       <View style={styles.section}>
//         <Text style={styles.title}>Mood Trends</Text>
//         <PieChart
//           data={[
//             {
//               name: 'Happy',
//               population: entries.filter((entry) => entry.mood === 'Happy').length,
//               color: '#f39c12',
//               legendFontColor: '#7F7F7F',
//               legendFontSize: 15,
//             },
//             {
//               name: 'Neutral',
//               population: entries.filter((entry) => entry.mood === 'Neutral').length,
//               color: '#3498db',
//               legendFontColor: '#7F7F7F',
//               legendFontSize: 15,
//             },
//             {
//               name: 'Sad',
//               population: entries.filter((entry) => entry.mood === 'Sad').length,
//               color: '#e74c3c',
//               legendFontColor: '#7F7F7F',
//               legendFontSize: 15,
//             },
//           ]}
//           width={Dimensions.get('window').width - 40}
//           height={220}
//           chartConfig={{
//             color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//           }}
//           accessor="population"
//           backgroundColor="transparent"
//           paddingLeft="15"
//           absolute
//           style={styles.chart}
//         />
//       </View>

//       {/* Journal Entry Frequency Visualization */}
//       <View style={styles.section}>
//         <Text style={styles.title}>Journal Entry Frequency</Text>
//         <BarChart
//           data={frequencyData}
//           width={Dimensions.get('window').width - 40}
//           height={220}
//           yAxisLabel="" // Default label for Y-axis
//           yAxisSuffix="" // Default suffix for Y-axis
//           chartConfig={{
//             backgroundColor: '#1cc910',
//             backgroundGradientFrom: '#43a047',
//             backgroundGradientTo: '#66bb6a',
//             decimalPlaces: 0,
//             color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//             labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//           }}
//           style={styles.chart}
//         />
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   section: {
//     backgroundColor: '#fff',
//     margin: 16,
//     borderRadius: 10,
//     padding: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     textAlign: 'center',
//     color: '#333',
//   },
//   chart: {
//     borderRadius: 10,
//   },
// });

import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { BarChart, PieChart } from 'react-native-chart-kit';
import { useJournalContext } from '../context/JournalContext';

export default function Dashboard() {
  const { entries } = useJournalContext();

  // Mood Data for Pie Chart
  const moodData = [
    {
      name: 'Happy',
      population: entries.filter((entry) => entry.mood === 'Happy').length,
      color: '#f39c12',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Neutral',
      population: entries.filter((entry) => entry.mood === 'Neutral').length,
      color: '#3498db',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Sad',
      population: entries.filter((entry) => entry.mood === 'Sad').length,
      color: '#e74c3c',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  // Journal Entry Frequency Data for Bar Chart
  const frequencyData = {
    labels: Object.keys(
      entries.reduce<Record<string, number>>((acc, entry) => {
        acc[entry.date] = (acc[entry.date] || 0) + 1;
        return acc;
      }, {})
    ),
    datasets: [
      {
        data: Object.values(
          entries.reduce<Record<string, number>>((acc, entry) => {
            acc[entry.date] = (acc[entry.date] || 0) + 1;
            return acc;
          }, {})
        ),
      },
    ],
  };

  // Mood Count Data
  const moodCounts = {
    Happy: entries.filter((entry) => entry.mood === 'Happy').length,
    Neutral: entries.filter((entry) => entry.mood === 'Neutral').length,
    Sad: entries.filter((entry) => entry.mood === 'Sad').length,
  };

  return (
    <ScrollView style={styles.container}>
      {/* Mood Trends Visualization */}
      <View style={styles.section}>
        <Text style={styles.title}>Mood Trends</Text>
        <PieChart
          data={moodData}
          width={Dimensions.get('window').width - 40}
          height={220}
          chartConfig={{
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
          style={styles.chart}
        />
      </View>

      {/* Mood Count Visualization */}
      <View style={styles.section}>
        <Text style={styles.title}>Mood Count</Text>
        <View style={styles.moodCountContainer}>
          <View style={styles.moodCountRow}>
            <View style={styles.moodItem}>
              <Text style={[styles.moodIcon, { color: '#f39c12' }]}>😊</Text>
              <Text style={styles.moodCount}>{moodCounts.Happy}</Text>
            </View>
            <View style={styles.moodItem}>
              <Text style={[styles.moodIcon, { color: '#3498db' }]}>😐</Text>
              <Text style={styles.moodCount}>{moodCounts.Neutral}</Text>
            </View>
            <View style={styles.moodItem}>
              <Text style={[styles.moodIcon, { color: '#e74c3c' }]}>😢</Text>
              <Text style={styles.moodCount}>{moodCounts.Sad}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Journal Entry Frequency Visualization */}
      <View style={styles.section}>
        <Text style={styles.title}>Journal Entry Frequency</Text>
        <BarChart
          data={frequencyData}
          width={Dimensions.get('window').width - 40}
          height={220}
          yAxisLabel="" // Default label for Y-axis
          yAxisSuffix="" // Default suffix for Y-axis
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#43a047',
            backgroundGradientTo: '#66bb6a',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          }}
          style={styles.chart}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  section: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  chart: {
    borderRadius: 10,
  },
  moodCountContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  moodCountRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  moodItem: {
    alignItems: 'center',
  },
  moodIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  moodCount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});