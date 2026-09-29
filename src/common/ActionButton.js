import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { COLORS } from "../constants/appTHEME";
import { styles } from "./ActionButton.styles";

function ActionButton({ icon, label, onPress, onLongPress, style }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      onLongPress={onLongPress}
      style={({ pressed }) => [styles.button, style, pressed && styles.pressed]}
    >
      <Ionicons name={icon} size={28} color={COLORS.white} />
    </Pressable>
  );
}

export default ActionButton;
