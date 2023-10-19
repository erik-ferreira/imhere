import { Feather } from "@expo/vector-icons"
import { View, Text, TextInput, TouchableOpacity } from "react-native"

import { Participant } from "../../components/Participant"

import { styles } from "./styles"

export function Home() {
  function handleAddParticipant() {
    console.log("Você clicou no botão de adicionar participante!")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Quinta, 19 de outubro de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do paciente"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleAddParticipant}
        >
          <Feather name="plus" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <Participant name="Erik Ferreira" />
      <Participant name="Maria Letícia" />
      <Participant name="José David" />
    </View>
  )
}
