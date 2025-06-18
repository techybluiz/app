import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
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
  icon: {
    fontSize: 20,
  },
})
