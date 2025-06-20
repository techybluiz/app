import type { ChatMessage } from "../types"

export const chatMessages: ChatMessage[] = [
  {
    id: "1",
    userAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
    userName: "Kristin Cooper",
    isModerator: true,
    time: "14:30",
    text: "Pessoal, acabei de ver a notícia sobre o novo chip da Apple! Que avanço incrível! 🚀",
    likes: 236,
    replies: 2,
    isPinned: false,
  },
  {
    id: "2",
    userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    userName: "@mercyCh",
    isModerator: false,
    time: "14:25",
    text: "Nova startup brasileira desenvolve IA para diagnóstico médico\n\nA empresa promete 95% de precisão nos testes iniciais, superando métodos tradicionais.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=150&fit=crop",
    likes: 23,
    replies: 0,
    isPinned: true,
  },
  {
    id: "3",
    userAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    userName: "Ralph Edwards",
    isModerator: false,
    time: "14:29",
    text: "Com certeza! A IA já está transformando muitos setores. Na saúde, pode salvar vidas 💙",
    likes: 236,
    replies: 0,
    isPinned: false,
  },
  {
    id: "4",
    userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    userName: "Robert Fox",
    isModerator: false,
    time: "14:35",
    text: "Alguém sabe se eles vão disponibilizar uma API pública?",
    likes: 5,
    replies: 0,
    isPinned: false,
  },
]
