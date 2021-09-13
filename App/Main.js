import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnboardingScreen from './screens/OnboardingScreen'
import LoginScreen from './screens/LoginScreen'

const MainStack = createNativeStackNavigator()

const Main = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <MainStack.Screen name="Login" component={LoginScreen} />
    </MainStack.Navigator>
  )
}

export default Main
