import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Pantry stack screens
import PantryScreen from "../screens/PantryScreen";
import GenerateScreen from "../screens/GenerateScreen";
import RecipeDetailScreen from "../screens/RecipeDetailScreen";
import CookModeScreen from "../screens/CookModeScreen";

// Other top-level tab screens
import FavoritesScreen from "../screens/FavoritesScreen";
import GroceryListScreen from "../screens/GroceryListScreen";
import SettingsScreen from "../screens/SettingsScreen";

// Auth/onboarding
import SignInScreen from "../screens/SignInScreen";
import OnboardingScreen from "../screens/OnboardingScreen";

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

export type RootStackParamList = {
  SignIn: undefined;
  Onboarding: undefined;
  Tabs: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
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

function TabsNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { fontSize: 12 },
      }}
    >
      <Tabs.Screen
        name="PantryStack"
        component={PantryStackNavigator}
        options={{ tabBarLabel: "Pantry" }}
      />
      <Tabs.Screen
        name="Grocery"
        component={GroceryListScreen}
        options={{ tabBarLabel: "Groceries" }}
      />
      <Tabs.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ tabBarLabel: "Favorites" }}
      />
      <Tabs.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ tabBarLabel: "Settings" }}
      />
    </Tabs.Navigator>
  );
}

export const RootNavigator = () => {
  // Replace this with your auth/onboarding gating logic:
  const isSignedIn = true; // <- wire to Redux/state later
  const isOnboarded = true;

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {!isSignedIn ? (
        <RootStack.Screen name="SignIn" component={SignInScreen} />
      ) : !isOnboarded ? (
        <RootStack.Screen name="Onboarding" component={OnboardingScreen} />
      ) : (
        <RootStack.Screen name="Tabs" component={TabsNavigator} />
      )}
    </RootStack.Navigator>
  );
};
