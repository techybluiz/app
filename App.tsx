import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons"
import HomeScreen from "./src/screens/HomeScreen"
import ExploreScreen from "./src/screens/ExploreScreen"
import SavedScreen from "./src/screens/SavedScreen"
import CommunityScreen from "./src/screens/CommunityScreen"
import ProfileScreen from "./src/screens/ProfileScreen"

export type RootTabParamList = {
  Home: undefined
  Explore: undefined
  Saved: undefined
  Community: undefined
  Profile: undefined
}

const Tab = createBottomTabNavigator<RootTabParamList>()

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap

            switch (route.name) {
              case "Home":
                iconName = focused ? "home" : "home-outline"
                break
              case "Explore":
                iconName = focused ? "search" : "search-outline"
                break
              case "Saved":
                iconName = focused ? "bookmark" : "bookmark-outline"
                break
              case "Community":
                iconName = focused ? "people" : "people-outline"
                break
              case "Profile":
                iconName = focused ? "person" : "person-outline"
                break
              default:
                iconName = "home-outline"
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: "#BD10E0",
          tabBarInactiveTintColor: "#999",
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopWidth: 1,
            borderTopColor: "#f0f0f0",
            paddingBottom: 5,
            paddingTop: 5,
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: "500",
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: "Início" }} />
        <Tab.Screen name="Explore" component={ExploreScreen} options={{ tabBarLabel: "Buscar" }} />
        <Tab.Screen name="Saved" component={SavedScreen} options={{ tabBarLabel: "Salvos" }} />
        <Tab.Screen name="Community" component={CommunityScreen} options={{ tabBarLabel: "Comunidade" }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarLabel: "Perfil" }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
