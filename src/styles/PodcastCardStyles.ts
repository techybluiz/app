import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  podcastCard: {
    width: 140,
    marginRight: 15,
  },
  imageContainer: {
    position: "relative",
    marginBottom: 8,
  },
  podcastImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  playButton: {
    position: "absolute",
    top: 25,
    left: 25,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  playIcon: {
    fontSize: 12,
  },
  podcastTitle: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  podcastSubtitle: {
    fontSize: 10,
    color: "#666",
    lineHeight: 14,
  },
})
