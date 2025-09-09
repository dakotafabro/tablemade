import React from "react";
import { Text, ScrollView } from "react-native";
import AppSafeArea from "../components/AppSafeArea";

export default function CookModeScreen() {
  {
    return (
      <AppSafeArea>
        <ScrollView>
          <Text
            style={{ fontSize: "24", fontWeight: "600", marginBottom: "12" }}
          >
            "Cook Mode"
          </Text>
          <Text>"Step-by-step with timers and big buttons."</Text>
        </ScrollView>
      </AppSafeArea>
    );
  }
}
