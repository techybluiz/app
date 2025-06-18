import { View, Text, Image, TouchableOpacity } from "react-native"
import { styles } from "../styles/ContinueReadingSectionStyles"

const ContinueReadingSection = () => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Continue lendo</Text>
        <TouchableOpacity>
          <Text style={styles.seeMore}>Ver histórico</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.continueReadingCard}>
        <Image source={{ uri: "/placeholder.svg?height=60&width=60" }} style={styles.continueReadingImage} />
        <View style={styles.continueReadingContent}>
          <Text style={styles.continueReadingTitle}>
            Minimalismo afetivo: o que é e por que todo mundo está falando disso?
          </Text>
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: "59%" }]} />
            </View>
            <Text style={styles.progressText}>59%</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default ContinueReadingSection
