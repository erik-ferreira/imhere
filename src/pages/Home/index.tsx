import { View, Text } from "react-native"

import { styles } from "./styles"

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Quinta, 19 de outubro de 2023</Text>
    </View>
  )
}
