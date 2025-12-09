import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { AppNavigator } from './src/navigation/AppNavigator';
import { useAppInitialization } from './src/hooks/useAppInitialization';
import { SplashScreen } from './src/screens/Splash/SplashScreen';

export default function App() {
  const { isReady, onLayoutRootView } = useAppInitialization();

  if (!isReady) {
    return <SplashScreen />;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <AppNavigator />
      <StatusBar style="auto" />
    </View>
  );
}
