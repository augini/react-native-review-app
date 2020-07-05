import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { globalStyles } from "../styles/Global";

export default function AboutScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>About Screen</Text>
    </View>
  );
}
