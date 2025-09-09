import React from "react";
import { Text, ScrollView } from "react-native";
import { Link } from "@react-navigation/native";
import AppSafeArea from "../components/AppSafeArea";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { PantryStackParamList } from "../navigation/RootNavigator";
import { Button } from "react-native";

type Nav = NativeStackNavigationProp<PantryStackParamList>;

export default function PantryScreen() {
  const nav = useNavigation<Nav>();
  return (
    <>
      <AppSafeArea>
        <ScrollView>
          <Text
            style={{ fontSize: "24", fontWeight: "600", marginBottom: "12" }}
          >
            Your Pantry
          </Text>
          <Text>Add/edit/remove items. Mark 'use soon'.</Text>
        </ScrollView>
      </AppSafeArea>
      <Button title="Find recipes" onPress={() => nav.navigate("Generate")} />
    </>
  );
}
