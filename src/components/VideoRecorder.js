import React, { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

const VideoRecorder = ({ onVideoRecorded }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === "granted" && mediaStatus === "granted");
    })();
  }, []);

  const startRecording = async () => {
    if (cameraRef.current) {
      setIsRecording(true);
      const video = await cameraRef.current.recordAsync();
      setIsRecording(false);

      // Save to gallery
      await MediaLibrary.createAssetAsync(video.uri);

      // Pass video URI to parent component
      onVideoRecorded(video.uri);
    }
  };

  const stopRecording = () => {
    if (cameraRef.current) {
      cameraRef.current.stopRecording();
    }
  };

  if (hasPermission === null) {
    return <View><Text>Requesting permissions...</Text></View>;
  }
  if (hasPermission === false) {
    return <View><Text>No access to camera</Text></View>;
  }

  return (
    <View style={styles.container}>
      <Camera ref={cameraRef} style={styles.camera} type={Camera.Constants.Type.front}>
        <View style={styles.controls}>
          <TouchableOpacity
            onPress={isRecording ? stopRecording : startRecording}
            style={[styles.button, isRecording && styles.recordingButton]}
          >
            <Text style={styles.buttonText}>{isRecording ? "Stop" : "Record"}</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  controls: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
  },
  button: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 50,
  },
  recordingButton: {
    backgroundColor: "darkred",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default VideoRecorder;
