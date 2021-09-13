import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'

const Dots = ({ selected }) => {
  let backgroundColor = ''

  backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.25)'

  return (
    <View
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  )
}
const SkipBtn = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 14 }} {...props}>
    <Text style={{ fontSize: 16 }}>Skip</Text>
  </TouchableOpacity>
)
const NextBtn = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 14 }} {...props}>
    <Text style={{ fontSize: 16 }}>Next</Text>
  </TouchableOpacity>
)
const DoneBtn = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 14 }} {...props}>
    <Text style={{ fontSize: 16 }}>Done</Text>
  </TouchableOpacity>
)

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.navigate('Login')}
      SkipButtonComponent={SkipBtn}
      NextButtonComponent={NextBtn}
      DoneButtonComponent={DoneBtn}
      DotComponent={Dots}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image source={require('../../assets/onboarding-img1.png')} />,
          title: 'Connect to the World',
          subtitle: 'A New Way To Connect With The World',
        },
        {
          backgroundColor: '#e9bcbe',
          image: <Image source={require('../../assets/onboarding-img2.png')} />,
          title: 'Share Your Favorites',
          subtitle: 'Share Your Thoughts With Similar Kind of People',
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image source={require('../../assets/onboarding-img3.png')} />,
          title: 'Become The Star',
          subtitle: 'Let The Spot Light Capture You',
        },
      ]}
    />
  )
}
export default OnboardingScreen
