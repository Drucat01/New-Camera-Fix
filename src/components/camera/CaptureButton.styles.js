import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/appTHEME";

export const styles = StyleSheet.create({
  button: {
    width: SIZES.captureControl,
    height: SIZES.captureControl,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    borderRadius: SIZES.captureControl / 2,
    backgroundColor: COLORS.yellow,
  },
  pressed: { opacity: 0.75 },
});
