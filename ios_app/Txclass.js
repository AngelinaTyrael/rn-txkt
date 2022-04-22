import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
Ionicons.loadFont().then();

import HomePage from './pages/Home';
import ListPage from './pages/List';
import DetailPage from './pages/Detail';

import Logo from './components/Logo';

function BottomTab() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case '首 页':
              iconName = 'ios-home';
              break;
            case '列 表':
              iconName = 'ios-list';
              break;
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color} />
          );
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false
      })}
    >
      <Tab.Screen
        name="首 页"
        component={HomePage}
      />
      <Tab.Screen
        name="列 表"
        component={ListPage}
      />
    </Tab.Navigator>
  );
}

function Txclass() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tab"
          component={BottomTab}
          options={{
            headerTitle: props => <Logo {...props} />
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailPage}
          options={{
            headerTitle: props => <Logo {...props} />,
            headerBackTitle: '返回'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Txclass;
