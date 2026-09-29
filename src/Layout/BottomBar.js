import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./BottomBar.style.js";

function BottomBar({ children }) {
  return (
    <SafeAreaView edges={["bottom"]} style={styles.safeArea}>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
}

export default BottomBar;
