import { useEffect } from "react"

import RegisterScreen from "./screens/RegisterScreen"

import { drizzle } from "drizzle-orm/expo-sqlite"
import { openDatabaseSync } from "expo-sqlite"
import { useFonts } from "expo-font"
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator"
import * as SplashScreen from "expo-splash-screen"
import migrations from "@db/drizzle/migrations"

SplashScreen.preventAutoHideAsync()
const expo = openDatabaseSync("litespeed.sqlite")
export const db = drizzle(expo)

export default function App() {
  const [fontLoaded, _] = useFonts({
    Fraunces: require("./assets/fonts/fraunces/Fraunces-VariableFont_SOFT,WONK,opsz,wght.ttf"),
  })

  const { success: migrationSuccess } = useMigrations(db, migrations)

  useEffect(() => {
    if (fontLoaded && migrationSuccess) {
      SplashScreen.hideAsync()
    }
  }, [fontLoaded, migrationSuccess])

  if (!(fontLoaded && migrationSuccess)) {
    return null
  }

  return <RegisterScreen />
}
