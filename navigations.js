import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/home/home'
import Signup from './pages/signup/signup'

const Stack = createStackNavigator();
export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        header: () => <></>,
                        title: ""
                    }}
                />
                <Stack.Screen
                    name="Signup"
                    component={Signup}
                    options={{
                        header: () => <></>,
                        title: ""
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}