import { useEffect } from "react"
import RegisterScreen from "./screens/RegisterScreen"

import { useFonts } from "expo-font"
import * as SplashScreen from "expo-splash-screen"

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [loaded, error] = useFonts({
    "Fraunces": require("./assets/fonts/fraunces/Fraunces-VariableFont_SOFT,WONK,opsz,wght.ttf"),
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return <RegisterScreen />
}
