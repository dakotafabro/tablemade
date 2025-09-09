import React from "react";
import { Text, ScrollView } from "react-native";
import { Link } from "@react-navigation/native";
import AppSafeArea from "../components/AppSafeArea";

export default function OnboardingScreen() {
  const submitHealthContext = () => {
    console.log("submitted health context to AI");
  };

  return (
    <AppSafeArea>
      <ScrollView>
        <Text style={{ fontSize: "24", fontWeight: "600", marginBottom: "12" }}>
          Tell us about your cooking & health context.
        </Text>
        <Text>Allergies, diet, dislikes, time budget, skill.</Text>
        <Link onPress={submitHealthContext} to={{ screen: "Settings" }}>
          Submit
        </Link>
      </ScrollView>
    </AppSafeArea>
  );
}
