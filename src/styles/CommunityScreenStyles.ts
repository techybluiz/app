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
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  backIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  communityImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  communityInfo: {
    justifyContent: "center",
  },
  communityName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  communityMembers: {
    fontSize: 12,
    color: "#666",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  icon: {
    fontSize: 20,
  },
  content: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  addButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  addIcon: {
    fontSize: 20,
    color: "#666",
  },
  messageInput: {
    flex: 1,
    height: 36,
    backgroundColor: "#f5f5f5",
    borderRadius: 18,
    paddingHorizontal: 12,
    fontSize: 14,
    color: "#333",
  },
  mediaButton: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  mediaIcon: {
    fontSize: 20,
    color: "#666",
  },
  emojiButton: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  emojiIcon: {
    fontSize: 20,
    color: "#666",
  },
  sendButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#BD10E0",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  sendIcon: {
    fontSize: 16,
    color: "#fff",
  },
})
