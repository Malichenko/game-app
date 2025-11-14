import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    overflow: "hidden",
  },
  buttonPrimary: {
    backgroundColor: "#72063c",
  },
  textPrimary: {
    color: "white",
  },
  buttonSecondary: {
    backgroundColor: "green",
  },
  textSecondary: {
    color: "white",
  },
  buttonDanger: {
    backgroundColor: "red",
  },
  textDanger: {
    color: "white",
  },
});
