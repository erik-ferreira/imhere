import { Home } from "./src/pages/Home"
import { StatusBar } from "expo-status-bar"

export default function App() {
  return (
    <>
      <Home />
      <StatusBar style="light" backgroundColor="transparent" translucent />
    </>
  )
}
