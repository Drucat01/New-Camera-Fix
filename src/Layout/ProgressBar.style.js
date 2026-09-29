import { View } from "react-native";
import { styles } from "./ProgressBar.styles";

function ProgressBar({ progress = 0 }) {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <View style={styles.track}>
      <View style={[styles.fill, { width: `${clampedProgress}%` }]} />
    </View>
  );
}

export default ProgressBar;
