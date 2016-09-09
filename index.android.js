import React, { Component } from 'react'
import {
   AppRegistry,
   View
} from 'react-native'
import Router from './components/HomeContainer'

class StatusBar extends Component {
   render() {
      return (
         <HomeContainer />
      )
   }
}

AppRegistry.registerComponent('StatusBar', () => StatusBar)
