import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Src from './src/index';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <Src />
    </SafeAreaView>
  );
};

export default App;
