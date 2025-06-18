import { View, Text, TouchableOpacity } from "react-native"
import { styles } from "../styles/CategoryGridStyles"
import { categoryData } from "../data/categoryData"

const CategoryGrid = () => {
  return (
    <View style={styles.gridContainer}>
      {categoryData.map((category, index) => (
        <TouchableOpacity key={index} style={styles.categoryCard}>
          <View style={[styles.iconContainer, { backgroundColor: category.backgroundColor }]}>
            <Text style={styles.categoryIcon}>{category.icon}</Text>
          </View>
          <Text style={styles.categoryTitle}>{category.title}</Text>
          <Text style={styles.categorySubtitle}>{category.subtitle}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default CategoryGrid
