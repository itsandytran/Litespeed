import { useEffect, useState } from "react"

import { FontSource, loadAsync } from "expo-font"
import * as SplashScreen from "expo-splash-screen"

import { drizzle } from "drizzle-orm/expo-sqlite"
import { migrate } from "drizzle-orm/expo-sqlite/migrator"
import { openDatabaseAsync } from "expo-sqlite/next"
import migrations from "@db/drizzle/migrations"

SplashScreen.preventAutoHideAsync()

type AppConfig = {
  databaseName: string
  fontMap: Record<string, FontSource>
}

export function useAppInit(config: AppConfig) {
  const { databaseName, fontMap } = config
  const [initialized, setInitialized] = useState(false)

  async function initialize() {
    try {
      // load fonts
      await loadAsync(fontMap)

      // initialize database
      // TODO: expose the database to the entire app using context
      const expoDB = await openDatabaseAsync(databaseName)
      const db = drizzle(expoDB)
      await migrate(db, migrations)

      // hide splash screen
      await SplashScreen.hideAsync()

      // initialization complete
      setInitialized(true)
    } catch (error) {
      console.error(error)
    }
  }

  // ensure the app is only initialized once
  useEffect(() => {
    initialize()
  }, [])

  return initialized
}
