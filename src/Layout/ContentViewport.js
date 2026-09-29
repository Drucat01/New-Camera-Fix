import { ScrollView, View } from "react-native";
import { styles } from "./ContentViewport.style";

function ContentViewport({ children, scrollable = false }) {
  return (
    <View style={styles.viewport}>
      {scrollable ? (
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {children}
        </ScrollView>
      ) : (
        children
      )}
    </View>
  );
}

export default ContentViewport;
