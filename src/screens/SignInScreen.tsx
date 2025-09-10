import React from "react";
import { Text, ScrollView } from "react-native";
import { Link } from "@react-navigation/native";
import AppSafeArea from "../components/AppSafeArea";

export default function SignInScreen() {
  {
    return (
      <AppSafeArea>
        <ScrollView>
          <Text
            style={{ fontSize: "24", fontWeight: "600", marginBottom: "12" }}
          >
            Sign in to TableMade
          </Text>
          <Text>Email, Apple, and GitHub sign-in live here.</Text>
          <Link to={{ screen: "Onboarding" }}>Sign In</Link>
        </ScrollView>
      </AppSafeArea>
    );
  }
}
