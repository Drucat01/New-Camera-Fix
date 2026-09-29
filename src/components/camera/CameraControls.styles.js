import { StyleSheet } from "react-native";
import { COLORS, RADIUS, SIZES } from "../../constants/appTHEME.js";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  sideButton: {
    width: SIZES.sideControl,
    height: SIZES.sideControl,
    borderRadius: RADIUS.small,
  },

  uploadButton: {
    backgroundColor: COLORS.red,
  },

  switchButton: {
    backgroundColor: COLORS.blue,
  },
});
