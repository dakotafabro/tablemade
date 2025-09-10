// src/navigation/RootNavigator.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

import SignInScreen from "../screens/SignInScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import { TabsNavigator } from "./TabsNavigator";

// Route types for this stack
export type RootStackParamList = {
  SignIn: undefined;
  Onboarding: undefined;
  Tabs: undefined;
};

// ✅ make sure we CALL the factory:
const RootStack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  // state-driven auth + onboarding
  const user = useSelector((s: RootState) => s.auth.user);
  const onboarded = useSelector((s: RootState) => s.profile.onboarded ?? false);

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
        <RootStack.Screen name="SignIn" component={SignInScreen} />
      ) : !onboarded ? (
        <RootStack.Screen name="Onboarding" component={OnboardingScreen} />
      ) : (
        <RootStack.Screen name="Tabs" component={TabsNavigator} />
      )}
    </RootStack.Navigator>
  );
}

export default RootNavigator;
