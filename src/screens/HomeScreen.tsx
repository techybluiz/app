import type React from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { topics } from "../data/topics"
import type { Topic } from "../types"

const { width } = Dimensions.get("window")

const HomeScreen: React.FC = () => {
  const renderTopicItem = (topic: Topic) => (
    <View key={topic.id} style={styles.topicItem}>
      <View style={[styles.topicIcon, { backgroundColor: topic.backgroundColor }]}>
        <Text style={styles.topicEmoji}>{topic.emoji}</Text>
      </View>
      <Text style={styles.topicLabel}>{topic.label}</Text>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.profileContainer}>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
              }}
              style={styles.profileImage}
            />
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

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar notícias, tópicos ou fontes..."
            placeholderTextColor="#999"
          />
        </View>

        {/* Topics Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Tópicos para seguir</Text>
            <TouchableOpacity>
              <Text style={styles.seeMore}>Ver mais</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.topicsContainer}>{topics.map(renderTopicItem)}</View>
        </View>

        {/* Continue Reading Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Continue lendo</Text>
            <TouchableOpacity>
              <Text style={styles.seeMore}>Ver histórico</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.continueReadingCard}>
            <Image
              source={{ uri: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop" }}
              style={styles.continueReadingImage}
            />
            <View style={styles.continueReadingContent}>
              <Text style={styles.continueReadingTitle}>
                Minimalismo afetivo: o que é e por que todo mundo está falando disso?
              </Text>
              <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                  <View style={[styles.progressFill, { width: "59%" }]} />
                </View>
                <Text style={styles.progressText}>59%</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Latest News Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Últimas notícias</Text>
          <View style={styles.newsCard}>
            <Image
              source={{ uri: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=250&fit=crop" }}
              style={styles.newsImage}
            />
            <View style={styles.newsOverlay}>
              <View style={styles.newsTag}>
                <Text style={styles.newsTagText}>Esporte</Text>
              </View>
              <View style={styles.newsSource}>
                <Ionicons name="tv-outline" size={16} color="#fff" />
                <Text style={styles.newsSourceText}>ESPN Brasil - 1m atrás</Text>
              </View>
              <Text style={styles.newsTitle}>
                Virada histórica no segundo tempo: Barcelona garante vitória no acréscimos
              </Text>
            </View>
          </View>
          <View style={styles.dotsContainer}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        {/* Bottom Tabs */}
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
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  profileContainer: {
    marginRight: 12,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: "#BD10E0",
  },
  greetingContainer: {
    flex: 1,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  name: {
    color: "#BD10E0",
  },
  date: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    marginLeft: 15,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 25,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  seeMore: {
    fontSize: 14,
    color: "#BD10E0",
  },
  topicsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topicItem: {
    alignItems: "center",
    width: (width - 60) / 5,
  },
  topicIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  topicEmoji: {
    fontSize: 24,
  },
  topicLabel: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  continueReadingCard: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    padding: 15,
  },
  continueReadingImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 15,
  },
  continueReadingContent: {
    flex: 1,
  },
  continueReadingTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
    lineHeight: 20,
    marginBottom: 10,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: "#e0e0e0",
    borderRadius: 2,
    marginRight: 10,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#BD10E0",
    borderRadius: 2,
  },
  progressText: {
    fontSize: 12,
    color: "#666",
  },
  newsCard: {
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 15,
  },
  newsImage: {
    width: "100%",
    height: 200,
  },
  newsOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 15,
  },
  newsTag: {
    backgroundColor: "#4A90E2",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  newsTagText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "500",
  },
  newsSource: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  newsSourceText: {
    color: "#fff",
    fontSize: 12,
    marginLeft: 5,
  },
  newsTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 22,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ddd",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#BD10E0",
  },
  bottomTabs: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 16,
    color: "#999",
  },
  activeTab: {
    color: "#BD10E0",
    fontWeight: "600",
  },
})

export default HomeScreen
