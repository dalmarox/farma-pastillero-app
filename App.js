import { ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font'
import TabNavigator from './src/navigation/TabNavigator';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {


  const [fontLoaded] = useFonts({
    'Roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Italic': require('./assets/fonts/Roboto-Italic.ttf'),
    'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
  })

  if (!fontLoaded) return <ActivityIndicator />

  return (

    <Provider store={store}>
      <TabNavigator />
    </Provider>
  );
}