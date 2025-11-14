import React from "react";
import { View, Text, Pressable, StyleSheet, Platform } from "react-native";

export default function RippleTest() {
  return (
    <View style={styles.screen}>
      <Pressable
        android_ripple={{
          color: "rgba(0,0,0,0.15)",
          radius: 160,
          borderless: false,
        }}
        style={({ pressed }) => [
          styles.btn,
          pressed && Platform.OS === "ios" && { opacity: 0.6 }, // iOS-фолбэк
        ]}
        onPress={() => {}}
      >
        <Text style={styles.txt}>Рипл тест</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  btn: {
    backgroundColor: "#4f46e5",
    borderRadius: 12,
    overflow: "hidden", // ВАЖНО для borderRadius
    paddingVertical: 14,
    paddingHorizontal: 18,
  },
  txt: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
