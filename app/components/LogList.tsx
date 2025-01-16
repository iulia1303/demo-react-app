import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

const LogList: React.FC = () => {
    const [logs, setLogs] = useState<any[]>([]);
    const [visibleLogs, setVisibleLogs] = useState(10);

    useEffect(() => {
        const generateLogs = () => {
            const logsData = [];
            for (let i = 0; i < 50; i++) {
                const user = ['Josh', 'Emma', 'Michael', 'Sarah', 'David'][i % 5];
                const action = `changed the temperature from ${Math.floor(Math.random() * 30 + 10)} to ${Math.floor(Math.random() * 30 + 20)}`;
                logsData.push({ id: i, user, action });
            }
            setLogs(logsData);
        };

        generateLogs();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Temperature Logs</Text>
            <FlatList
                data={logs.slice(0, visibleLogs)}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.logItem}>
                        <Text>{item.user} {item.action}</Text>
                    </View>
                )}
            />
            {visibleLogs < logs.length && (
                <Button title="Load More" onPress={() => setVisibleLogs(visibleLogs + 10)} />
            )}
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
    logItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default LogList;
