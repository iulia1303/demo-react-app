import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import SensorItem from './SensorItem';

interface Sensor {
    id: number;
    name: string;
    status: string;
}

interface Props {
    sensors: Sensor[];
}

const SensorList: React.FC<Props> = ({ sensors }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sensors</Text>
            <FlatList
                data={sensors}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <SensorItem sensor={item} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default SensorList;
