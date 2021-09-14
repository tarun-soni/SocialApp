import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import OnboardingScreen from './screens/OnboardingScreen'
import LoginScreen from './screens/LoginScreen'

const MainStack = createNativeStackNavigator()

const Main = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState()

  useEffect(() => {
    const getData = async () => {
      // await AsyncStorage.clear()
      try {
        const value = await AsyncStorage.getItem('@isAlreadyLaunched')
        if (value !== null) setIsFirstLaunch(false)
        else {
          setIsFirstLaunch(true)
          await AsyncStorage.setItem('@isAlreadyLaunched', 'true')
        }
      } catch (e) {
        console.log(`error`, e)
      }
    }
    getData()
  }, [])

  if (isFirstLaunch === null) {
    Alert.alert('Please Restart the app')
  }

  if (isFirstLaunch === true) {
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
    // eslint-disable-next-line no-else-return
  } else {
    return <LoginScreen />
  }
}

export default Main
