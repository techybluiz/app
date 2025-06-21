import { View, Text, TouchableOpacity } from "react-native"
import TopicItem from "./TopicItem"
import { styles } from "../styles/TopicsSectionStyles"
import { topicsData } from "../data/topicsData"

const TopicsSection = () => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Tópicos para seguir</Text>
        <TouchableOpacity>
          <Text style={styles.seeMore}>Ver mais</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.topicsContainer}>
        {topicsData.map((topic, index) => (
          <TopicItem key={index} emoji={topic.emoji} label={topic.label} backgroundColor={topic.backgroundColor} />
        ))}
      </View>
    </View>
  )
}

export default TopicsSection
