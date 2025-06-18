import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  chatContainer: {
    padding: 15,
  },
  messageContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageContent: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  userName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginRight: 6,
  },
  moderatorBadge: {
    fontSize: 12,
    color: "#BD10E0",
    fontWeight: "500",
    marginRight: 6,
  },
  messageTime: {
    fontSize: 12,
    color: "#999",
  },
  messageBubble: {
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    padding: 12,
    maxWidth: "95%",
  },
  pinnedMessage: {
    backgroundColor: "#f0f8ff",
    borderLeftWidth: 3,
    borderLeftColor: "#4A90E2",
  },
  currentUserMessage: {
    backgroundColor: "#e3f2fd",
  },
  pinnedLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "#4A90E2",
    marginBottom: 6,
  },
  messageText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
    marginBottom: 8,
  },
  messageImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  messageActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  likeButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  replyButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionIcon: {
    fontSize: 14,
    marginRight: 4,
    color: "#999",
  },
  actionCount: {
    fontSize: 12,
    color: "#666",
  },
})
