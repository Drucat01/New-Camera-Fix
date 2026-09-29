import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { ICONS } from "../../constants/appIcons.js";
import { COLORS } from "../../constants/appTHEME.js";
import { styles } from "./CaptureButton.styles";

// Pressable skips onPress automatically when onLongPress fires.
function CaptureButton({ onPress, onLongPress }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Capture image"
      onPress={onPress}
      onLongPress={onLongPress}
      delayLongPress={450}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Ionicons name={ICONS.camera} size={38} color={COLORS.black} />
    </Pressable>
  );
}

export default CaptureButton;
