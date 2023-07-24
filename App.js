import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WellCome from './Screen/WellCome';
import NFT from './Screen/NFT';
import Home from './Screen/Home';


export default function App() {
  const Stack =createNativeStackNavigator()
  const [fontLoaded] = useFonts({
    InterBold: require('./assets/Fonts/Inter-Bold.ttf'),
    InterLight: require('./assets/Fonts/Inter-Light.ttf'),
    InterMedium: require('./assets/Fonts/Inter-Medium.ttf'),
    InterRegular: require('./assets/Fonts/Inter-Regular.ttf'),
    InterSemiBold: require('./assets/Fonts/Inter-SemiBold.ttf'),
  });
  if (!fontLoaded) return null
  return (
    <>
      <StatusBar style="light" animated={true} />
      <NavigationContainer>
        <Stack.Navigator 
        initialRouteName='WellCome'
         screenOptions={{
          headerShown:false,

        }}>
    <Stack.Screen name='Home' component={Home}/>
    <Stack.Screen name='WellCome' component={WellCome}/>
    <Stack.Screen name='nft' component={NFT}/>
        </Stack.Navigator>
      </NavigationContainer>
   
    </>
  );
}


