import { StyleSheet } from "react-native";
import { COLORS } from "../constants/appTHEME.js";

export const styles = StyleSheet.create({
  safeArea: {
    width: "100%",
    backgroundColor: COLORS.background,
  },
  content: {
    width: "90%",
    minHeight: 120,
    alignSelf: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
});
