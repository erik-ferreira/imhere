import { View, Text, ViewProps } from "react-native"

import { ButtonToggleParticipant } from "../ButtonToggleParticipant"

import { styles } from "./styles"

interface ParticipantProps extends ViewProps {
  name: string
  onRemove: () => void
}

export function Participant({ name, onRemove, ...rest }: ParticipantProps) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.name}>{name}</Text>

      <ButtonToggleParticipant variant="remove" onPress={onRemove} />
    </View>
  )
}
