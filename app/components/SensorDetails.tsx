import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Sensor {
    name: string;
    status: string;
}

interface Props {
    sensor: Sensor;
}

const SensorDetails: React.FC<Props> = ({ sensor }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{sensor.name} Details</Text>
            <Text style={styles.text}>Status: {sensor.status}</Text>
            <Text style={styles.text}>Location: Warehouse 1</Text>
            <Text style={styles.text}>Last Calibrated: 2024-12-15</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 14,
        color: '#333',
        marginBottom: 5,
    },
});

export default SensorDetails;
