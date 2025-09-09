// src/screens/SettingsScreen.tsx
import React from "react";
import { Text, ScrollView, Pressable } from "react-native";
import AppSafeArea from "../components/AppSafeArea";
import { useDispatch } from "react-redux";
import { signOut as signOutAction } from "../redux/slices/authSlice";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

export default function SettingsScreen() {
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      await signOut(auth); // clear Firebase session
      dispatch(signOutAction()); // clear Redux state
    } catch (e) {
      console.log("Error signing out:", e);
    }
  };

  return (
    <AppSafeArea>
      <ScrollView>
        <Text style={{ fontSize: 24, fontWeight: "600", marginBottom: 12 }}>
          Settings
        </Text>
        <Text>Profile, privacy, notifications.</Text>

        <Pressable onPress={handleSignOut} style={{ marginTop: 24 }}>
          <Text style={{ color: "red" }}>Sign Out</Text>
        </Pressable>
      </ScrollView>
    </AppSafeArea>
  );
}
