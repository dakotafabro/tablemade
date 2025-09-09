import React from "react";
import { Text, ScrollView } from "react-native";
import AppSafeArea from "../components/AppSafeArea";

export default function FavoritesScreen() {
  {
    return (
      <AppSafeArea>
        <ScrollView>
          <Text
            style={{ fontSize: "24", fontWeight: "600", marginBottom: "12" }}
          >
            "Favorites"
          </Text>
          <Text>"Your saved and rated recipes."</Text>
        </ScrollView>
      </AppSafeArea>
    );
  }
}
