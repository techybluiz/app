import { View, Text, Image } from "react-native"
import { styles } from "../styles/LatestNewsSectionStyles"

const LatestNewsSection = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Últimas notícias</Text>
      <View style={styles.newsCard}>
        <Image source={{ uri: "/placeholder.svg?height=200&width=350" }} style={styles.newsImage} />
        <View style={styles.newsOverlay}>
          <View style={styles.newsTag}>
            <Text style={styles.newsTagText}>Esporte</Text>
          </View>
          <View style={styles.newsSource}>
            <Text style={styles.newsSourceIcon}>📺</Text>
            <Text style={styles.newsSourceText}>ESPN Brasil - 1m atrás</Text>
          </View>
          <Text style={styles.newsTitle}>
            Virada histórica no segundo tempo: Barcelona garante vitória no acréscimos
          </Text>
        </View>
      </View>
      <View style={styles.dotsContainer}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>
    </View>
  )
}

export default LatestNewsSection
