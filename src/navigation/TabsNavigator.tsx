// src/navigation/TabsNavigator.tsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

// Pantry stack screens
import PantryScreen from "../screens/PantryScreen";
import GenerateScreen from "../screens/GenerateScreen";
import RecipeDetailScreen from "../screens/RecipeDetailScreen";
import CookModeScreen from "../screens/CookModeScreen";

// Other top-level tabs
import FavoritesScreen from "../screens/FavoritesScreen";
import GroceryListScreen from "../screens/GroceryListScreen";
import SettingsScreen from "../screens/SettingsScreen";

/** -------- Types -------- */
export type PantryStackParamList = {
  PantryHome: undefined;
  Generate: undefined;
  RecipeDetail: { recipeId: string };
  CookMode: { recipeId: string };
};

export type TabsParamList = {
  PantryStack: undefined;
  Favorites: undefined;
  Groceries: undefined;
  Settings: undefined;
};

/** -------- Navigators -------- */
const PantryStack = createNativeStackNavigator<PantryStackParamList>();
const Tabs = createBottomTabNavigator<TabsParamList>();

function PantryStackNavigator() {
  return (
    <PantryStack.Navigator screenOptions={{ headerShown: false }}>
      <PantryStack.Screen name="PantryHome" component={PantryScreen} />
      <PantryStack.Screen name="Generate" component={GenerateScreen} />
      <PantryStack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
      <PantryStack.Screen name="CookMode" component={CookModeScreen} />
    </PantryStack.Navigator>
  );
}

export function TabsNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabelStyle: { fontSize: 12 },
        tabBarIcon: ({ color, size }) => {
          // Minimal icon mapping; tweak to taste
          const name =
            route.name === "PantryStack"
              ? "basket"
              : route.name === "Favorites"
              ? "heart"
              : route.name === "Groceries"
              ? "cart"
              : "settings"; // Settings
          return <Ionicons name={name as any} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen
        name="PantryStack"
        component={PantryStackNavigator}
        options={{ tabBarLabel: "Pantry" }}
      />
      <Tabs.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ tabBarLabel: "Favorites" }}
      />
      <Tabs.Screen
        name="Groceries"
        component={GroceryListScreen}
        options={{ tabBarLabel: "Groceries" }}
      />
      <Tabs.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ tabBarLabel: "Settings" }}
      />
    </Tabs.Navigator>
  );
}
