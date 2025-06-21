import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  recommendedCard: {
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 15,
    position: "relative",
  },
  recommendedImage: {
    width: "100%",
    height: 120,
  },
  recommendedOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: 15,
  },
  recommendedTags: {
    flexDirection: "row",
    marginBottom: 8,
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 8,
  },
  tagText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "500",
  },
  recommendedTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 20,
    marginBottom: 5,
  },
  recommendedSource: {
    color: "#ccc",
    fontSize: 12,
  },
  bookmarkButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  bookmarkIcon: {
    fontSize: 14,
  },
})
