import { useAppInit } from "./hooks/useAppInit"
import Fraunces from "@assets/fonts/fraunces/Fraunces-VariableFont_SOFT,WONK,opsz,wght.ttf"
import RegisterScreen from "./screens/RegisterScreen"
import EditMenuScreen from "./screens/EditMenuScreen"

export default function App() {
  const initialized = useAppInit({
    databaseName: "litespeed.sqlite",
    fontMap: { Fraunces },
  })

  if (!initialized) {
    return null
  }

  return <EditMenuScreen greeting="asdf" />
}
