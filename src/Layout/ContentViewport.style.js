import { StyleSheet } from "react-native";
import { COLORS, RADIUS } from "../constants/appTHEME.js";

export const styles = StyleSheet.create({
  viewport: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
    overflow: "hidden",
    backgroundColor: COLORS.blue,
    borderRadius: RADIUS.small,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
});
