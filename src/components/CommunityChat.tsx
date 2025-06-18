import { View, Text, Image, TouchableOpacity } from "react-native"
import { styles } from "../styles/CommunityChatStyles"
import { chatMessagesData } from "../data/chatMessagesData"

const CommunityChat = () => {
  return (
    <View style={styles.chatContainer}>
      {chatMessagesData.map((message, index) => (
        <View key={index} style={styles.messageContainer}>
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
                message.isPinned ? styles.pinnedMessage : {},
                message.isCurrentUser ? styles.currentUserMessage : {},
              ]}
            >
              {message.isPinned && <Text style={styles.pinnedLabel}>Post fixado</Text>}

              <Text style={styles.messageText}>{message.text}</Text>

              {message.image && <Image source={{ uri: message.image }} style={styles.messageImage} />}

              <View style={styles.messageActions}>
                <TouchableOpacity style={styles.likeButton}>
                  <Text style={styles.actionIcon}>❤️</Text>
                  <Text style={styles.actionCount}>{message.likes}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.replyButton}>
                  <Text style={styles.actionIcon}>💬</Text>
                  <Text style={styles.actionCount}>{message.replies}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  )
}

export default CommunityChat
