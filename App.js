import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './App/Pages/SignUp.js'; // Import the SignUp component
import Login from './App/Pages/Login.js'; // Import the Login component
import ChatScreen from './App/Pages/ChatScreen';
import HomeScreen from './App/Pages/HomeScreen';
import HomeNavigation from './App/Navigation/HomeNavigation.js'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();
  const AuthStack = createStackNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SignUp"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#621FF7',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
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
            options={{ title: 'Chat' }}
          />
           <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ title: 'Sign Up' }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: 'Login' }}
          />
        </Stack.Navigator>
        
        {/* Authentication stack */}
        {/* <AuthStack.Navigator
          initialRouteName="SignUp"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#621FF7',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <AuthStack.Screen
            name="SignUp"
            component={SignUp}
            options={{ title: 'Sign Up' }}
          />
          <AuthStack.Screen
            name="Login"
            component={Login}
            options={{ title: 'Login' }}
          />
        </AuthStack.Navigator> */}
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
