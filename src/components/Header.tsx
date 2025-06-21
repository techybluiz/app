import { View, Text, Image, TouchableOpacity } from "react-native"
import { styles } from "../styles/HeaderStyles"

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <View style={styles.profileContainer}>
          <Image source={{ uri: "/placeholder.svg?height=50&width=50" }} style={styles.profileImage} />
        </View>
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>
            Bom dia, <Text style={styles.name}>Maria</Text>
          </Text>
          <Text style={styles.date}>Quinta-Feira, 22 de maio</Text>
        </View>
      </View>
      <View style={styles.headerRight}>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.icon}>🌙</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.icon}>🔔</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.icon}>☰</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header
