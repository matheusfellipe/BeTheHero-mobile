import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const appStack = createNativeStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Details';

export default function Routes() {
    return (
        <NavigationContainer>
            <appStack.Navigator screenOptions={{ headerShown: false }}>
                <appStack.Screen name="Incidents" component={Incidents} />
                <appStack.Screen name="Detail" component={Detail} />
            </appStack.Navigator>
        </NavigationContainer>
    );
}