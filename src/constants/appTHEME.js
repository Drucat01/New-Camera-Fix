import { Platform } from "react-native";

export const COLORS = {
  black: "#000000",
  white: "#ffffff",
  red: "#E5484D",
  blue: "#2563EB",
  yellow: "#FACC15",

  background: "#000000",
};

export const RADIUS = {
  small: 12,
  medium: 14,
  large: 24,
};

export const SIZES = {
  sideControl: 56,
  captureControl: 80,
};

const family = Platform.select({
  ios: "System",
  android: "sans-serif",
  default: "System",
});

export const FONTS = {
  regular: family,
  bold: family,
  extraBold: family,
};
