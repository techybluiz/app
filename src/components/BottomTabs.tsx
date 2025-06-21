import { View, Text, TouchableOpacity } from "react-native"
import { styles } from "../styles/BottomTabsStyles"

const BottomTabs = () => {
  return (
    <View style={styles.bottomTabs}>
      <TouchableOpacity style={styles.tab}>
        <Text style={[styles.tabText, styles.activeTab]}>Pra você</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Text style={styles.tabText}>Em alta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Text style={styles.tabText}>Recentes</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BottomTabs
