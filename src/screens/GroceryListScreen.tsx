import React from "react";
import { Text, ScrollView } from "react-native";
import AppSafeArea from "../components/AppSafeArea";

export default function GroceryListScreen() {
  {
    return (
      <AppSafeArea>
        <ScrollView>
          <Text
            style={{ fontSize: "24", fontWeight: "600", marginBottom: "12" }}
          >
            "Grocery List"
          </Text>
          <Text>"Missing items for selected recipes."</Text>
        </ScrollView>
      </AppSafeArea>
    );
  }
}
