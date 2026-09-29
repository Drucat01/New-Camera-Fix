import { StyleSheet } from "react-native";
import { COLORS, FONTS, RADIUS } from "../../constants/appTHEME.js";

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  panel: {
    width: "90%",
    maxWidth: 360,
    padding: 24,
    gap: 15,
    borderRadius: RADIUS.large,
    backgroundColor: COLORS.white,
  },
  title: {
    color: COLORS.blue,
    fontFamily: FONTS.extraBold,
    fontWeight: "800",
    fontSize: 22,
    textAlign: "center",
  },
  options: { width: "100%", gap: 10 },
  methodButton: {
    width: "100%",
    minHeight: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    borderRadius: RADIUS.medium,
    backgroundColor: COLORS.blue,
  },
  methodButtonText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontWeight: "700",
    fontSize: 16,
  },
  cancelButton: {
    width: "100%",
    minHeight: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: RADIUS.medium,
    backgroundColor: COLORS.red,
  },
  cancelButtonText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontWeight: "700",
    fontSize: 15,
  },
});
