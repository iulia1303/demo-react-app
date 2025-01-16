import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const PieChartComponent: React.FC = () => {
    const data = [
        { name: 'Active', population: 70, color: '#36A2EB', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'Inactive', population: 20, color: '#FF6384', legendFontColor: '#7F7F7F', legendFontSize: 15 },
        { name: 'Error', population: 10, color: '#FFCE56', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    ];

    return (
        <View>
            <Text style={styles.title}>Sensor Status Distribution</Text>
            <PieChart
                data={data}
                width={Dimensions.get('window').width - 20}
                height={220}
                chartConfig={{
                    backgroundColor: '#ffffff',
                    backgroundGradientFrom: '#ffffff',
                    backgroundGradientTo: '#ffffff',
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                }}
                accessor="population"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default PieChartComponent;
