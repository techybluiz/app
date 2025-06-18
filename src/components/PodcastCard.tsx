import type React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { styles } from "../styles/PodcastCardStyles"

interface PodcastCardProps {
  image: string
  title: string
  subtitle: string
  hasPlayButton?: boolean
}

const PodcastCard: React.FC<PodcastCardProps> = ({ image, title, subtitle, hasPlayButton = true }) => {
  return (
    <View style={styles.podcastCard}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.podcastImage} />
        {hasPlayButton && (
          <TouchableOpacity style={styles.playButton}>
            <Text style={styles.playIcon}>▶️</Text>
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.podcastTitle}>{title}</Text>
      <Text style={styles.podcastSubtitle}>{subtitle}</Text>
    </View>
  )
}

export default PodcastCard
