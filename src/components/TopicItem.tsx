import type React from "react"
import { View, Text } from "react-native"
import { styles } from "../styles/TopicItemStyles"

interface TopicItemProps {
  emoji: string
  label: string
  backgroundColor: string
}

const TopicItem: React.FC<TopicItemProps> = ({ emoji, label, backgroundColor }) => {
  return (
    <View style={styles.topicItem}>
      <View style={[styles.topicIcon, { backgroundColor }]}>
        <Text style={styles.topicEmoji}>{emoji}</Text>
      </View>
      <Text style={styles.topicLabel}>{label}</Text>
    </View>
  )
}

export default TopicItem
