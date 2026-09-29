import { View } from "react-native";
import ActionButton from "../../common/ActionButton.js";
import { ICONS } from "../../constants/appIcons.js";
import { styles } from "./CameraControls.styles.js";
import CaptureButton from "./CaptureButton.js";

function CameraControls({
  facing,
  onUploadImage,
  onSwitchCamera,
  onCaptureOCR,
  onCaptureObject,
}) {
  const isRearCamera = facing === "back";

  return (
    <View style={styles.container}>
      <ActionButton
        icon={ICONS.image}
        label="Upload image"
        onPress={onUploadImage}
        style={[styles.sideButton, styles.uploadButton]}
      />

      <CaptureButton onPress={onCaptureOCR} onLongPress={onCaptureObject} />

      <ActionButton
        icon={isRearCamera ? ICONS.switchFront : ICONS.switchRear}
        label={
          isRearCamera ? "Switch to front camera" : "Switch to rear camera"
        }
        onPress={onSwitchCamera}
        style={[styles.sideButton, styles.switchButton]}
      />
    </View>
  );
}

export default CameraControls;
