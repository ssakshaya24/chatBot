import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatScreen from './App/Pages/ChatScreen';
import HomeScreen from './App/Pages/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeNavigation from './App/Navigation/HomeNavigation';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <View style={styles.container}>
      {/* <ChatScreen/> */}
      
      <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#621FF7',
          },
          headerTintColor: '#fff',
          headerTitleStyle :{
            fontWeight: 'bold',
          },
        }}
      >
      <Stack.Screen 
        name="/" 
        component={HomeNavigation} 
        options={{ title: 'Home' }}
      />
     
      <Stack.Screen 
       name="chat" 
       component={ChatScreen} 
       options={{ title: 'chat' }}
      />
    </Stack.Navigator>
          
      </NavigationContainer>
      {/* <HomeScreen/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});