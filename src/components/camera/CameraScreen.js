import TextRecognition from "@react-native-ml-kit/text-recognition";
import * as ImagePicker from "expo-image-picker";
import { useRef, useState } from "react";
import { ActivityIndicator, Alert, View } from "react-native";
import BottomBar from "../../Layout/BottomBar.js";
import ContentViewport from "../../Layout/ContentViewport";
import * as ProgressBarModule from "../../Layout/ProgressBar.js";
import CameraControls from "./CameraControls";
import CameraPreview from "./CameraPreview";
import { styles } from "./CameraScreen.style.js";
import ImageMethod from "./ImageMethod";

console.log("ProgressBar module:", ProgressBarModule);
console.log("Default export:", ProgressBarModule.default);
console.log("Export keys:", Object.keys(ProgressBarModule));
function CameraScreen() {
  const [facing, setFacing] = useState("back");
  const [selectedImage, setSelectedImage] = useState(null);
  const [showImageMethod, setShowImageMethod] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const cameraRef = useRef(null);
  const busyRef = useRef(false); // synchronous lock; state alone can't stop double taps

  function switchCamera() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  // Shared OCR routine for camera captures and uploaded images.
  async function runOCR(uri) {
    try {
      setIsProcessing(true);
      const result = await TextRecognition.recognize(uri);
      const text = result.text?.trim();

      if (!text) {
        Alert.alert("OCR", "No text was detected.");
        return;
      }

      // Replace this Alert with your database lookup / results screen later.
      Alert.alert("Recognized Text", text);
    } catch (error) {
      console.error("OCR error:", error);
      Alert.alert("OCR Error", "Could not recognize text from the image.");
    } finally {
      setIsProcessing(false);
    }
  }

  async function openImageUpload() {
    if (busyRef.current) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled && result.assets?.[0]) {
      setSelectedImage(result.assets[0]);
      setShowImageMethod(true);
    }
  }

  async function selectOCR() {
    const image = selectedImage;
    setShowImageMethod(false);
    setSelectedImage(null);
    if (!image?.uri || busyRef.current) return;

    busyRef.current = true;
    try {
      // Small delay so iOS finishes dismissing the modal before any Alert appears.
      await new Promise((resolve) => setTimeout(resolve, 350));
      await runOCR(image.uri);
    } finally {
      busyRef.current = false;
    }
  }

  function selectObjectRecognition() {
    setShowImageMethod(false);
    setSelectedImage(null);
    // Object recognition will be connected later.
  }

  function cancelImageMethod() {
    setSelectedImage(null);
    setShowImageMethod(false);
  }

  async function captureOCR() {
    if (busyRef.current) return;

    if (!cameraRef.current) {
      Alert.alert("Camera", "Camera is not ready yet.");
      return;
    }

    busyRef.current = true;
    try {
      const photo = await cameraRef.current.takePictureAsync({ quality: 0.8 });

      if (!photo?.uri) {
        Alert.alert("OCR", "Could not capture the image.");
        return;
      }

      await runOCR(photo.uri);
    } catch (error) {
      console.error("Capture error:", error);
      Alert.alert("Camera Error", "Could not capture the image.");
    } finally {
      busyRef.current = false;
    }
  }

  function captureObjectPlaceholder() {
    Alert.alert(
      "Object Recognition",
      "Camera capture is ready for object-recognition integration later.",
    );
  }

  return (
    <View style={styles.screen}>
      <ContentViewport>
        <CameraPreview ref={cameraRef} facing={facing} />
      </ContentViewport>

      <View style={{ height: 5, backgroundColor: "red" }} />

      <BottomBar>
        <CameraControls
          facing={facing}
          onUploadImage={openImageUpload}
          onSwitchCamera={switchCamera}
          onCaptureOCR={captureOCR}
          onCaptureObject={captureObjectPlaceholder}
        />
      </BottomBar>

      <ImageMethod
        visible={showImageMethod}
        image={selectedImage}
        onSelectOCR={selectOCR}
        onSelectObject={selectObjectRecognition}
        onCancel={cancelImageMethod}
      />

      {isProcessing && (
        <View style={styles.processingOverlay} pointerEvents="auto">
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      )}
    </View>
  );
}

export default CameraScreen;
