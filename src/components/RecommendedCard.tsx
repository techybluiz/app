import type React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { styles } from "../styles/RecommendedCardStyles"

interface Tag {
  text: string
  backgroundColor: string
}

interface RecommendedCardProps {
  image: string
  tags: Tag[]
  title: string
  source: string
}

const RecommendedCard: React.FC<RecommendedCardProps> = ({ image, tags, title, source }) => {
  return (
    <View style={styles.recommendedCard}>
      <Image source={{ uri: image }} style={styles.recommendedImage} />
      <View style={styles.recommendedOverlay}>
        <View style={styles.recommendedTags}>
          {tags.map((tag, index) => (
            <View key={index} style={[styles.tag, { backgroundColor: tag.backgroundColor }]}>
              <Text style={styles.tagText}>{tag.text}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.recommendedTitle}>{title}</Text>
        <Text style={styles.recommendedSource}>{source}</Text>
      </View>
      <TouchableOpacity style={styles.bookmarkButton}>
        <Text style={styles.bookmarkIcon}>🔖</Text>
      </TouchableOpacity>
    </View>
  )
}

export default RecommendedCard
