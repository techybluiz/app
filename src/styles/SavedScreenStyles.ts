import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
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
    gap: 15,
  },
  icon: {
    fontSize: 20,
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
  filterIcon: {
    fontSize: 14,
    marginRight: 5,
  },
  filterText: {
    fontSize: 14,
    color: "#333",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
})
