import './gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigations} from './src/routes/StackNavigations';

function App() {
  return (
    <NavigationContainer>
      <StackNavigations />
    </NavigationContainer>
  );
}

export default App;
