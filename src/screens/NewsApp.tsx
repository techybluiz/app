import { ScrollView, SafeAreaView, StatusBar } from "react-native"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import TopicsSection from "../components/TopicsSection"
import ContinueReadingSection from "../components/ContinueReadingSection"
import LatestNewsSection from "../components/LatestNewsSection"
import BottomTabs from "../components/BottomTabs"
import RecommendedSection from "../components/RecommendedSection"
import PodcastsSection from "../components/PodcastsSection"
import BottomNavigation from "../components/BottomNavigation"
import { styles } from "../styles/NewsAppStyles"

const NewsApp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <Header />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <SearchBar />
        <TopicsSection />
        <ContinueReadingSection />
        <LatestNewsSection />
        <BottomTabs />
        <RecommendedSection />
        <PodcastsSection />
      </ScrollView>

      <BottomNavigation />
    </SafeAreaView>
  )
}

export default NewsApp
