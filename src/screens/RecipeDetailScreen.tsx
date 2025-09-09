import React from "react";
import { Text, ScrollView } from "react-native";
import AppSafeArea from "../components/AppSafeArea";

export default function RecipeDetailScreen() {
  {
    return (
      <AppSafeArea>
        <ScrollView>
          <Text
            style={{ fontSize: "24", fontWeight: "600", marginBottom: "12" }}
          >
            "Recipe Detail"
          </Text>
          <Text>"Steps, nutrition, and 'why this fits your context'."</Text>
        </ScrollView>
      </AppSafeArea>
    );
  }
}
