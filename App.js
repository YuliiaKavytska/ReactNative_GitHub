import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import { NavigationContainer } from '@react-navigation/native'

import Header from './src/Navigation/Header'
import { gSt } from './src/helpers/styles'
import Navigate from './src/Navigation/Navigate'
import Footer from './src/Navigation/Footer'
import { ApolloProvider } from '@apollo/client'
import { client, createApolloClient } from './src/apolloClient'

const robotoFont = () => Font.loadAsync({
  'rb-light': require('./assets/fonts/Roboto-Light.ttf'),
  'rb-regular':require('./assets/fonts/Roboto-Regular.ttf'),
  'rb-bold':require('./assets/fonts/Roboto-Bold.ttf'),
})

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [client, setClient] = useState(null)

  useEffect(() => {
    setClient(createApolloClient)
  }, [])

  if (isLoading || !client) {
    return <AppLoading
      startAsync={robotoFont}
      onFinish={() => setIsLoading(false)}
      onError={console.warn} />
  }

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <View style={gSt.app}>
          <Navigate />
          <Footer />
        </View>
      </NavigationContainer>
    </ApolloProvider>
  );
}