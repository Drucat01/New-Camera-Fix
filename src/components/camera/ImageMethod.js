import { Modal, Pressable, Text, View } from "react-native";
import { styles } from "./ImageMethod.styles";

function ImageMethod({ visible, onSelectOCR, onSelectObject, onCancel }) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      statusBarTranslucent
      onRequestClose={onCancel}
    >
      <View style={styles.overlay}>
        <View style={styles.panel}>
          <Text style={styles.title}>Choose Search Method</Text>

          <View style={styles.options}>
            <Pressable onPress={onSelectOCR} style={styles.methodButton}>
              <Text style={styles.methodButtonText}>OCR</Text>
            </Pressable>

            <Pressable onPress={onSelectObject} style={styles.methodButton}>
              <Text style={styles.methodButtonText}>Object Recognition</Text>
            </Pressable>
          </View>

          <Pressable onPress={onCancel} style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

export default ImageMethod;
