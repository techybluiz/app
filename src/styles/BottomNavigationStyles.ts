import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  navItem: {
    alignItems: "center",
  },
  navIcon: {
    fontSize: 20,
    marginBottom: 4,
    color: "#999",
  },
  activeNavIcon: {
    color: "#BD10E0",
  },
  navLabel: {
    fontSize: 10,
    color: "#999",
  },
  activeNavLabel: {
    color: "#BD10E0",
  },
})
