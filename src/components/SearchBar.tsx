import { View, Text, TextInput } from "react-native"
import { styles } from "../styles/SearchBarStyles"

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <Text style={styles.searchIcon}>🔍</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar notícias, tópicos ou fontes..."
        placeholderTextColor="#999"
      />
    </View>
  )
}

export default SearchBar
