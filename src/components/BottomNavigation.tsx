import type React from "react"
import { View, TouchableOpacity, Text } from "react-native"
import { styles } from "../styles/BottomNavigationStyles"

interface BottomNavigationProps {
  activeTab: "inicio" | "buscar" | "salvos" | "comunidade" | "perfil"
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ activeTab }) => {
  return (
    <View style={styles.bottomNavigation}>
      <TouchableOpacity style={styles.navItem}>
        <Text style={[styles.navIcon, activeTab === "inicio" ? styles.activeNavIcon : {}]}>🏠</Text>
        <Text style={[styles.navLabel, activeTab === "inicio" ? styles.activeNavLabel : {}]}>Início</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={[styles.navIcon, activeTab === "buscar" ? styles.activeNavIcon : {}]}>🔍</Text>
        <Text style={[styles.navLabel, activeTab === "buscar" ? styles.activeNavLabel : {}]}>Buscar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={[styles.navIcon, activeTab === "salvos" ? styles.activeNavIcon : {}]}>🔖</Text>
        <Text style={[styles.navLabel, activeTab === "salvos" ? styles.activeNavLabel : {}]}>Salvos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={[styles.navIcon, activeTab === "comunidade" ? styles.activeNavIcon : {}]}>👥</Text>
        <Text style={[styles.navLabel, activeTab === "comunidade" ? styles.activeNavLabel : {}]}>Comunidade</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={[styles.navIcon, activeTab === "perfil" ? styles.activeNavIcon : {}]}>👤</Text>
        <Text style={[styles.navLabel, activeTab === "perfil" ? styles.activeNavLabel : {}]}>Perfil</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BottomNavigation
