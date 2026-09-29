import { CameraView, useCameraPermissions } from "expo-camera";
import { forwardRef } from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./CameraPreview.styles";

const CameraPreview = forwardRef(function CameraPreview(
  { facing = "back" },
  ref,
) {
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <View style={styles.placeholder} />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>
          Camera permission is needed to show the live preview.
        </Text>
        <Pressable onPress={requestPermission} style={styles.permissionButton}>
          <Text style={styles.permissionButtonText}>Allow Camera</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <CameraView
      ref={ref}
      style={styles.camera}
      facing={facing}
      mode="picture"
    />
  );
});

export default CameraPreview;
