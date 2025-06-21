import { View, Text, TouchableOpacity } from "react-native"
import RecommendedCard from "./RecommendedCard"
import { styles } from "../styles/RecommendedSectionStyles"
import { recommendedData } from "../data/recommendedData"

const RecommendedSection = () => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recomendados para você</Text>
        <TouchableOpacity>
          <Text style={styles.seeMore}>Ver mais</Text>
        </TouchableOpacity>
      </View>

      {recommendedData.map((item, index) => (
        <RecommendedCard key={index} image={item.image} tags={item.tags} title={item.title} source={item.source} />
      ))}
    </View>
  )
}

export default RecommendedSection
