import { Feather } from "@expo/vector-icons"
import { View, Text, TouchableOpacity, ViewProps } from "react-native"

import { styles } from "./styles"

interface ParticipantProps extends ViewProps {
  name: string
}

export function Participant({ name, ...rest }: ParticipantProps) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Feather name="minus" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  )
}
