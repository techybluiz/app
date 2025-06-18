import type React from "react"
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { chatMessages } from "../data/chatMessages"
import type { ChatMessage } from "../types"

const CommunityScreen: React.FC = () => {
  const renderMessage = (message: ChatMessage) => (
    <View key={message.id} style={styles.messageContainer}>
      <Image source={{ uri: message.userAvatar }} style={styles.userAvatar} />

      <View style={styles.messageContent}>
        <View style={styles.messageHeader}>
          <Text style={styles.userName}>{message.userName}</Text>
          {message.isModerator && <Text style={styles.moderatorBadge}>Mod</Text>}
          <Text style={styles.messageTime}>{message.time}</Text>
        </View>

        <View
          style={[
            styles.messageBubble,
            message.isPinned && styles.pinnedMessage,
            message.isCurrentUser && styles.currentUserMessage,
          ]}
        >
          {message.isPinned && <Text style={styles.pinnedLabel}>Post fixado</Text>}

          <Text style={styles.messageText}>{message.text}</Text>

          {message.image && <Image source={{ uri: message.image }} style={styles.messageImage} />}

          <View style={styles.messageActions}>
            <TouchableOpacity style={styles.likeButton}>
              <Ionicons name="heart-outline" size={16} color="#999" />
              <Text style={styles.actionCount}>{message.likes}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.replyButton}>
              <Ionicons name="chatbubble-outline" size={16} color="#999" />
              <Text style={styles.actionCount}>{message.replies}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity>
            <Ionicons name="chevron-back" size={24} color="#333" />
          </TouchableOpacity>
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=80&h=80&fit=crop" }}
            style={styles.communityImage}
          />
          <View style={styles.communityInfo}>
            <Text style={styles.communityName}>Devs Front-End</Text>
            <Text style={styles.communityMembers}>12.500 membros</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Ionicons name="people-outline" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="ellipsis-vertical" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {chatMessages.map(renderMessage)}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={20} color="#666" />
        </TouchableOpacity>
        <TextInput style={styles.messageInput} placeholder="Digite sua mensagem..." placeholderTextColor="#999" />
        <TouchableOpacity style={styles.mediaButton}>
          <Ionicons name="camera-outline" size={20} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.emojiButton}>
          <Ionicons name="happy-outline" size={20} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton}>
          <Ionicons name="send" size={16} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
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
    flex: 1,
  },
  communityImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  communityInfo: {
    justifyContent: "center",
    flex: 1,
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
  },
  iconButton: {
    marginLeft: 15,
  },
  content: {
    flex: 1,
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
  actionCount: {
    fontSize: 12,
    color: "#666",
    marginLeft: 4,
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
  emojiButton: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
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
})

export default CommunityScreen
