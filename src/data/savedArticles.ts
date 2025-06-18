import type { Article } from "../types"

export const savedArticles: Article[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=120&h=120&fit=crop",
    title: "Revolução da IA: Novos modelos transformam a indústria tech",
    description:
      "Empresas de tecnologia anunciam avanços significativos em inteligência artificial que prometem revolucionar diversos setores",
    author: "Ana Silva",
    time: "5min",
    savedTime: "Salvo Hoje",
    likes: 236,
    comments: 45,
    liked: true,
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=120&h=120&fit=crop",
    title: "Sustentabilidade: Empresas adotam práticas verdes",
    description:
      "Grandes corporações implementam políticas ambientais inovadoras para reduzir impacto ambiental e promover sustentabilidade",
    author: "Ana Silva",
    time: "7min",
    savedTime: "Salvo Ontem",
    likes: 395,
    comments: 161,
    liked: false,
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=120&h=120&fit=crop",
    title: "Mercado financeiro registra alta histórica",
    description: "Bolsa de valores atinge novo recorde com crescimento sustentado em diversos setores da economia",
    author: "Ana Silva",
    time: "6min",
    savedTime: "Salvo 2 dias atrás",
    likes: 456,
    comments: 28,
    liked: false,
  },
]
