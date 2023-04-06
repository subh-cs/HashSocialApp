import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  Alert,
  PermissionsAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Camera } from "expo-camera";
import { useNavigation } from "@react-navigation/native";

const CameraScreen = () => {
  const { height } = useWindowDimensions();
  const width = height * 0.6;
  const [startCamera, setStartCamera] = useState(true);
  const [flash, setFlash] = useState(false);
  const [cameraFrontFace, setCameraFrontFace] = useState(false);
  const navigation = useNavigation();

  // start camera function
  let camera;

  const ClickImage = async () => {
    if (camera) {
      let photo = await camera.takePictureAsync();
      console.log(photo);
      navigation.navigate("Preview", { photo: photo });
    }
  };

  const requestCameraPermission = async () => {
    try {
      const cameraAccessCheck = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.CAMERA
      );
      if (cameraAccessCheck) {
        setStartCamera(true);
      } else {
        await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestCameraPermission();
  }, [startCamera]);

  return (
    <>
      {startCamera ? (
        <View style={styles.container}>
          <Camera
            style={{ height: height, width: width }}
            ref={(r) => {
              camera = r;
            }}
            ratio="16:9"
            flashMode={
              flash
                ? Camera.Constants.FlashMode.torch
                : Camera.Constants.FlashMode.off
            }
            type={
              cameraFrontFace
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            }
          />
          <View style={styles.bottombar}>
            <TouchableOpacity onPress={() => setFlash((flash) => !flash)}>
              <Image
                source={require("../../assets/camera-flash.png")}
                style={styles.bottom_button}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={ClickImage}>
              <Image
                source={require("../../assets/camera-click.png")}
                style={styles.bottom_button}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                setCameraFrontFace((cameraFrontFace) => !cameraFrontFace)
              }
            >
              <Image
                source={require("../../assets/camera-switch.png")}
                style={styles.bottom_button}
              ></Image>
            </TouchableOpacity>
          </View>
          <Text style={styles.buttom_text}>
            Tap for image and hold for video
          </Text>
        </View>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Please allow camera and microphone permission
          </Text>
          <TouchableOpacity onPress={requestCameraPermission}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "blue" }}>
              open camera
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  bottombar: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    width: "100%",
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  bottom_button: {
    width: 45,
    height: 45,
    resizeMode: "contain",
  },
  buttom_text: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    width: "100%",
    textAlign: "center",
    color: "white",
  },
});
