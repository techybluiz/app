import { View, Text, Image, TouchableOpacity } from "react-native"
import { styles } from "../styles/SavedArticleListStyles"
import { savedArticlesData } from "../data/savedArticlesData"

const SavedArticleList = () => {
  return (
    <View style={styles.articlesContainer}>
      {savedArticlesData.map((article, index) => (
        <View key={index} style={styles.articleCard}>
          <View style={styles.articleContent}>
            <Image source={{ uri: article.image }} style={styles.articleImage} />
            <View style={styles.articleInfo}>
              <Text style={styles.articleTitle}>{article.title}</Text>
              <Text style={styles.articleDescription} numberOfLines={2}>
                {article.description}
              </Text>

              <View style={styles.articleMeta}>
                <Text style={styles.articleAuthor}>{article.author}</Text>
                <Text style={styles.metaDot}>•</Text>
                <Text style={styles.articleTime}>{article.time}</Text>
              </View>

              <Text style={styles.savedTime}>{article.savedTime}</Text>
            </View>
          </View>

          <View style={styles.articleActions}>
            <View style={styles.actionGroup}>
              <TouchableOpacity style={styles.likeButton}>
                <Text style={[styles.actionIcon, article.liked ? styles.likedIcon : {}]}>❤️</Text>
                <Text style={styles.actionCount}>{article.likes}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.commentButton}>
                <Text style={styles.actionIcon}>💬</Text>
                <Text style={styles.actionCount}>{article.comments}</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <Text style={styles.moreIcon}>⋮</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  )
}

export default SavedArticleList
