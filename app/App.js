import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import React from 'react'
import main from './src/Router/MainRouter'
import auth from './src/Router/AuthRouter'
import landingScreen from './src/Screens/LandingScreen'
import { AuthProvider } from './src/Context/AuthContext'
import { UserProvider } from './src/Context/UserContext'
import { GameProvider } from './src/Context/GameContext'
import SimulationScreen from './src/Screens/SimulationScreen'

console.disableYellowBox = true
const navigator = createSwitchNavigator({
  landingScreen,
  auth,
  main,
})

const AppContainer = createAppContainer(navigator)

const App = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <GameProvider>
          <AppContainer />
        </GameProvider>
      </UserProvider>
    </AuthProvider>
  )
}
export default App
