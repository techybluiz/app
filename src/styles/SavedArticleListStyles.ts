import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  articlesContainer: {
    marginBottom: 20,
  },
  articleCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#eee",
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
  actionIcon: {
    fontSize: 16,
    marginRight: 5,
    color: "#999",
  },
  likedIcon: {
    color: "#ff4d4d",
  },
  actionCount: {
    fontSize: 14,
    color: "#666",
  },
  moreIcon: {
    fontSize: 18,
    color: "#666",
  },
})
