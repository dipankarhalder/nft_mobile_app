import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ROUTE from '../config/router';
import {SplashScreen} from '../screens/SplashScreen';
import {HomeScreen} from '../screens/HomeScreen';
import {ExploreScreen} from '../screens/ExploreScreen';
// import {LoginScreen} from '../screens/LoginScreen';

const Stack = createStackNavigator();
export const StackNavigations = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTE.splash}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ROUTE.splash} component={SplashScreen} />
      <Stack.Screen name={ROUTE.homeTabs} component={HomeScreen} />
      <Stack.Screen name={ROUTE.exploreTabs} component={ExploreScreen} />
      {/* <Stack.Screen name={ROUTE.login} component={LoginScreen} /> */}
    </Stack.Navigator>
  );
};
