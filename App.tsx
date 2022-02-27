import type {ReactNode} from 'react';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './src/navigation/navigation';
import {Provider as ReduxProvider} from 'react-redux';
import store from './src/logic/redux/store';

const App: () => ReactNode = () => {
  return (
    <ReduxProvider store={store}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </ReduxProvider>
  );
};

export default App;
