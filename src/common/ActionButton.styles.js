import { StyleSheet } from "react-native";
import { SIZES } from "../constants/appTHEME.js";

export const styles = StyleSheet.create({
  button: {
    width: SIZES.actionButton,
    height: SIZES.actionButton,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  pressed: {
    opacity: 0.75,
  },
  icon: {
    width: "70%",
    height: "70%",
  },
});
