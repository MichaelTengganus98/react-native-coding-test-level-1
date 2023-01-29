import * as React from 'react';
import { Text, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button onPress={() => navigation.navigate('Form Submission')} title="Go to form submission" />
            <Button onPress={() => navigation.navigate('Catalog')} title="View Catalog" />
        </View>
    );
}

export { HomeScreen };