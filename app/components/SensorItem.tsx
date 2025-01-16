import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Sensor {
    id: number;
    name: string;
    status: string;
}

interface Props {
    sensor: Sensor;
}

const SensorItem: React.FC<Props> = ({ sensor }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.name}>{sensor.name}</Text>
            <Text style={styles.status}>Status: {sensor.status}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    status: {
        fontSize: 14,
        color: '#555',
    },
});

export default SensorItem;
