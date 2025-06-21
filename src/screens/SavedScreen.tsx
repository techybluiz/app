import type React from "react"
import { View, Text, StyleSheet, ScrollView, SafeAreaView, StatusBar, TouchableOpacity, Image } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { savedArticles } from "../data/savedArticles"
import type { Article } from "../types"

const SavedScreen: React.FC = () => {
  const renderArticleCard = (article: Article) => (
    <View key={article.id} style={styles.articleCard}>
      <View style={styles.articleContent}>
        <Image source={{ uri: article.image }} style={styles.articleImage} />
        <View style={styles.articleInfo}>
          <Text style={styles.articleTitle} numberOfLines={2}>
            {article.title}
          </Text>
          <Text style={styles.articleDescription} numberOfLines={2}>
            {article.description}
          </Text>

          <View style={styles.articleMeta}>
            <Text style={styles.articleAuthor}>{article.author}</Text>
            <Text style={styles.metaDot}>•</Text>
            <Text style={styles.articleTime}>{article.time}</Text>
          </View>

          {article.savedTime && <Text style={styles.savedTime}>{article.savedTime}</Text>}
        </View>
      </View>

      <View style={styles.articleActions}>
        <View style={styles.actionGroup}>
          <TouchableOpacity style={styles.likeButton}>
            <Ionicons
              name={article.liked ? "heart" : "heart-outline"}
              size={18}
              color={article.liked ? "#ff4d4d" : "#999"}
            />
            <Text style={styles.actionCount}>{article.likes}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.commentButton}>
            <Ionicons name="chatbubble-outline" size={18} color="#999" />
            <Text style={styles.actionCount}>{article.comments}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={18} color="#666" />
        </TouchableOpacity>
      </View>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Salvos</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Ionicons name="moon-outline" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="menu-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.filterContainer}>
        <View style={styles.counters}>
          <Text style={styles.counterText}>3 artigos encontrados</Text>
          <Text style={styles.counterDivider}>•</Text>
          <Text style={styles.counterText}>3 não lidos</Text>
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Ionicons name="filter-outline" size={16} color="#333" />
          <Text style={styles.filterText}>Todos</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {savedArticles.map(renderArticleCard)}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#BD10E0",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    marginLeft: 15,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  counters: {
    flexDirection: "row",
    alignItems: "center",
  },
  counterText: {
    fontSize: 14,
    color: "#333",
  },
  counterDivider: {
    marginHorizontal: 8,
    color: "#999",
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: "#eee",
  },
  filterText: {
    fontSize: 14,
    color: "#333",
    marginLeft: 5,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  articleCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#eee",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  articleContent: {
    flexDirection: "row",
    marginBottom: 10,
  },
  articleImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  articleInfo: {
    flex: 1,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  articleDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  articleMeta: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  articleAuthor: {
    fontSize: 12,
    color: "#666",
  },
  metaDot: {
    fontSize: 12,
    color: "#999",
    marginHorizontal: 5,
  },
  articleTime: {
    fontSize: 12,
    color: "#666",
  },
  savedTime: {
    fontSize: 12,
    color: "#999",
  },
  articleActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  actionGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  likeButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  commentButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionCount: {
    fontSize: 14,
    color: "#666",
    marginLeft: 5,
  },
})

export default SavedScreen
