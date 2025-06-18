import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
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
})
