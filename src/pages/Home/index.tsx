import { View, Text, TextInput, ScrollView } from "react-native"

import { Participant } from "../../components/Participant"
import { ButtonToggleParticipant } from "../../components/ButtonToggleParticipant"

import { styles } from "./styles"

export function Home() {
  const participants = [
    "Erik",
    "Maria",
    "David",
    "Breno",
    "Nascimento",
    "Leticia",
    "Andressa",
    "Vanessa",
    "Vanusa",
    "Daniel",
    "Jeiel",
    "Matheus",
  ]

  function handleAddParticipant() {
    console.log("Você clicou no botão de adicionar participante!")
  }

  function handleRemoveParticipant(name: string) {
    console.log("Você clicou em remover o participante " + name)
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

        <ButtonToggleParticipant variant="add" onPress={handleAddParticipant} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={() => handleRemoveParticipant(participant)}
          />
        ))}
      </ScrollView>
    </View>
  )
}
