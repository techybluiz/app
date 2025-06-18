import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import PodcastCard from "./PodcastCard"
import { styles } from "../styles/PodcastsSectionStyles"
import { podcastsData } from "../data/podcastsData"

const PodcastsSection = () => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Podcasts para você</Text>
        <TouchableOpacity>
          <Text style={styles.seeMore}>Ver mais</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.podcastsContainer}>
        {podcastsData.map((podcast, index) => (
          <PodcastCard
            key={index}
            image={podcast.image}
            title={podcast.title}
            subtitle={podcast.subtitle}
            hasPlayButton={podcast.hasPlayButton}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default PodcastsSection
