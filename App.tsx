import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <PersistGate persistor={persistor}>
        <Navigation colorScheme={'light'} />
        <StatusBar animated barStyle="light-content" showHideTransition='slide' />
        </PersistGate>
      </SafeAreaProvider>
    </Provider>
  );
}
