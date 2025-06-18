import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 15,
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
  newsSourceIcon: {
    fontSize: 14,
    marginRight: 5,
  },
  newsSourceText: {
    color: "#fff",
    fontSize: 12,
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
})
