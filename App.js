
import React from 'react'
import Navigation from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { colors } from './src/utils/colors';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={colors.tealGreen} />
      <Navigation />
    </SafeAreaProvider>
  )
}

export default App
