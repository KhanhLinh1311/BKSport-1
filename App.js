import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './Welcome';
import Weather from './Weather';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name = "Welcome"
          component={Welcome}
          options={{
            title: "Welcome",headerStyle: {
              backgroundColor: '#fee1e8',
            },
            headerTintColor: 'black',
          }}
        />
        <Stack.Screen 
          name="Weather" 
          component={Weather} 
          options={{
            title: "Weather",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
