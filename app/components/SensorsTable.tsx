import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Sensor {
    id: number;
    name: string;
    status: string;
    temperature: number;
}

const SensorsTable: React.FC = () => {
    const [sensors, setSensors] = useState<Sensor[]>([
        { id: 1, name: 'Temperature Sensor', status: 'Active', temperature: 28 },
        { id: 2, name: 'Humidity Sensor', status: 'Inactive', temperature: 22 },
        { id: 3, name: 'Pressure Sensor', status: 'Error', temperature: 30 },
        { id: 4, name: 'Light Sensor', status: 'Active', temperature: 25 },
        { id: 5, name: 'Proximity Sensor', status: 'Inactive', temperature: 20 },
    ]);
    const [sortConfig, setSortConfig] = useState<{ key: keyof Sensor | null; direction: 'ascending' | 'descending' | null }>({ key: null, direction: null });
    const [statusFilter, setStatusFilter] = useState<string>('');

    const sortedSensors = [...sensors].sort((a, b) => {
        if (!sortConfig.key) return 0;
        const { key, direction } = sortConfig;
        const order = direction === 'ascending' ? 1 : -1;
        return key === 'name'
            ? a[key].localeCompare(b[key]) * order
            : ((a[key] as number) - (b[key] as number)) * order;
    });

    const filteredSensors = sortedSensors.filter((sensor) =>
        sensor.status.toLowerCase().includes(statusFilter.toLowerCase())
    );

    const handleSort = (key: keyof Sensor) => {
        setSortConfig((prevConfig) => {
            if (prevConfig.key === key) {
                return prevConfig.direction === 'ascending'
                    ? { key, direction: 'descending' }
                    : { key: null, direction: null };
            }
            return { key, direction: 'ascending' };
        });
    };

    const removeSensor = (id: number) => setSensors((prev) => prev.filter((sensor) => sensor.id !== id));

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sensors Table</Text>
            <TextInput
                style={styles.input}
                placeholder="Filter by status (Active, Inactive, Error)"
                value={statusFilter}
                onChangeText={(text) => setStatusFilter(text)}
            />
            <FlatList
                data={filteredSensors}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <Text style={styles.cell}>{item.name}</Text>
                        <Text style={styles.cell}>{item.temperature}°C</Text>
                        <Text style={styles.cell}>{item.status}</Text>
                        <View style={styles.actions}>
                            <TouchableOpacity onPress={() => console.log(`Edit ${item.id}`)}>
                                <Icon name="edit" size={20} color="#007bff" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => removeSensor(item.id)}>
                                <Icon name="trash" size={20} color="#dc3545" />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
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
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 15,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    cell: {
        flex: 1,
        fontSize: 14,
        textAlign: 'left',
    },
    actions: {
        flexDirection: 'row',
        gap: 10,
    },
});

export default SensorsTable;
