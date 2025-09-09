import React from "react";
import { Text, ScrollView } from "react-native";
import AppSafeArea from "../components/AppSafeArea";

export default function GenerateScreen() {
  {
    return (
      <AppSafeArea>
        <ScrollView>
          <Text
            style={{ fontSize: "24", fontWeight: "600", marginBottom: "12" }}
          >
            "What can I cook?"
          </Text>
          <Text>
            "Enter ingredients and generate recipes that fit your context."
          </Text>
        </ScrollView>
      </AppSafeArea>
    );
  }
}
