import { Feather } from "@expo/vector-icons"
import { View, TouchableOpacity, TouchableOpacityProps } from "react-native"

import { styles } from "./styles"

const defaultVariants = {
  add: {
    iconName: "plus",
    backgroundColor: "#31CF67",
  },

  remove: {
    iconName: "minus",
    backgroundColor: "#E23C44",
  },
} as const

interface ButtonToggleParticipantProps extends TouchableOpacityProps {
  variant?: keyof typeof defaultVariants
}

export function ButtonToggleParticipant({
  variant = "add",
  ...rest
}: ButtonToggleParticipantProps) {
  const typeButton = defaultVariants[variant]

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: typeButton.backgroundColor },
      ]}
      activeOpacity={0.7}
      {...rest}
    >
      <Feather name={typeButton.iconName} size={24} color="#000" />
    </TouchableOpacity>
  )
}
