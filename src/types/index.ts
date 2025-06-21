export interface Topic {
  id: string
  emoji: string
  label: string
  backgroundColor: string
}

export interface Article {
  id: string
  image: string
  title: string
  description: string
  author: string
  time: string
  savedTime?: string
  likes: number
  comments: number
  liked: boolean
}

export interface Category {
  id: string
  icon: string
  title: string
  subtitle: string
  color: string
}

export interface ChatMessage {
  id: string
  userAvatar: string
  userName: string
  isModerator: boolean
  time: string
  text: string
  image?: string
  likes: number
  replies: number
  isPinned: boolean
  isCurrentUser?: boolean
}
