import { StyleSheet } from "react-native";
import { COLORS, FONTS, RADIUS } from "../../constants/appTHEME.js";

export const styles = StyleSheet.create({
  camera: { flex: 1, width: "100%" },
  placeholder: { flex: 1, backgroundColor: COLORS.black },
  permissionContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    padding: 30,
    backgroundColor: COLORS.black,
  },
  permissionText: {
    color: COLORS.white,
    fontFamily: FONTS.regular,
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
  },
  permissionButton: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: RADIUS.medium,
    backgroundColor: COLORS.blue,
  },
  permissionButtonText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontWeight: "700",
    fontSize: 14,
  },
});
