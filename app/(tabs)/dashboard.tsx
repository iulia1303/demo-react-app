import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import SensorList from '../components/SensorList';
import SensorDetails from '../components/SensorDetails';
import SensorChart from '../components/SensorChart';
import PieChart from '../components/PieChart';
import LogList from '../components/LogList';
import SensorsTable from '../components/SensorsTable';

const Dashboard: React.FC = () => {
  const sensors = [
    { id: 1, name: 'Temperature Sensor', status: 'Active' },
    { id: 2, name: 'Humidity Sensor', status: 'Inactive' },
    { id: 3, name: 'Pressure Sensor', status: 'Active' },
  ];

  const selectedSensor = sensors[0];

  // List of components to render
  const components = [
    { key: 'sensorDetails', component: <SensorDetails sensor={selectedSensor} /> },
    { key: 'sensorChart', component: <SensorChart /> },
    { key: 'pieChart', component: <PieChart /> },
    { key: 'sensorList', component: <SensorList sensors={sensors} /> },
    { key: 'sensorsTable', component: <SensorsTable /> },
    { key: 'logList', component: <LogList /> },
  ];

  return (
      <FlatList
          data={components}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => <View style={styles.section}>{item.component}</View>}
          contentContainerStyle={styles.dashboardContainer}
      />
  );
};

const styles = StyleSheet.create({
  dashboardContainer: {
    padding: 10,
  },
  section: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
});

export default Dashboard;
