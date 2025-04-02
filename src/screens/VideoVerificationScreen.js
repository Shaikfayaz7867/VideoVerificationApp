import React, { useState, useRef } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  StatusBar,
  ActivityIndicator,
  Image
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Video } from 'expo-av';
import { useNavigation } from "@react-navigation/native";
import Toast from 'react-native-toast-message';

export default function VideoScreen() {
  const [video, setVideo] = useState(null);
  const [status, setStatus] = useState({});
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const videoRef = useRef(null);

  const pickVideo = async () => {
    setLoading(true);
    try {
      // Request camera permissions
      const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
      
      if (cameraPermission.status !== 'granted') {
        alert('We need camera permissions to record your verification video');
        setLoading(false);
        return;
      }

      // Open camera directly for recording video
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: true,
        aspect: [9, 16],
        quality: 1,
        videoMaxDuration: 30,
      });

      if (!result.canceled && result.assets && result.assets[0]) {
        setVideo(result.assets[0].uri);
      }
    } catch (error) {
      console.log('Error recording video:', error);
      alert('There was an error recording your video. Please try again.');
    }
    setLoading(false);
  };

  const handleUpload = () => {
    setLoading(true);
    
    // Simulate upload with timeout
    setTimeout(() => {
      setLoading(false);
      Toast.show({
        type: 'success',  // 'success' | 'error' | 'info'
        text1: 'Success!',
        text2: 'Video has been sent for Verification'
      });
      navigation.navigate("CompletedProcess");
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Video Verification</Text>
      </View>
      
      {!video ? (
        <View style={styles.instructionsContainer}>
          <View style={styles.circleContainer}>
            <View style={styles.circle}>
              <Image 
                source={require('../assets/camera-icon.png')}  // You'll need to add this icon
                style={styles.cameraIcon}
                // If you don't have the icon, you can use text instead:
                // fallback={<Text style={styles.cameraIconText}>📹</Text>}
              />
            </View>
          </View>
          
          <Text style={styles.instructionsTitle}>Record a short video</Text>
          
          <View style={styles.instructionsList}>
            <View style={styles.instructionItem}>
              <View style={styles.instructionDot} />
              <Text style={styles.instructionText}>Face the camera directly</Text>
            </View>
            <View style={styles.instructionItem}>
              <View style={styles.instructionDot} />
              <Text style={styles.instructionText}>Ensure good lighting</Text>
            </View>
            <View style={styles.instructionItem}>
              <View style={styles.instructionDot} />
              <Text style={styles.instructionText}>State your name clearly</Text>
            </View>
            <View style={styles.instructionItem}>
              <View style={styles.instructionDot} />
              <Text style={styles.instructionText}>Keep video under 30 seconds</Text>
            </View>
          </View>
          
          <TouchableOpacity 
            style={styles.recordButton} 
            onPress={pickVideo}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#FFFFFF" size="small" />
            ) : (
              <Text style={styles.buttonText}>START RECORDING</Text>
            )}
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.videoContainer}>
          <Text style={styles.previewText}>Video Preview</Text>
          
          <Video
            ref={videoRef}
            source={{ uri: video }}
            style={styles.video}
            useNativeControls
            resizeMode="cover"
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
          />
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={handleUpload}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#FFFFFF" size="small" />
              ) : (
                <Text style={styles.buttonText}>UPLOAD VIDEO</Text>
              )}
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.retakeButton}
              onPress={() => setVideo(null)}
              disabled={loading}
            >
              <Text style={styles.retakeButtonText}>RECORD AGAIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    textAlign: 'center',
  },
  instructionsContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleContainer: {
    marginBottom: 25,
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#e8f5e9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraIcon: {
    width: 50,
    height: 50,
    tintColor: '#28a745',
  },
  cameraIconText: {
    fontSize: 40,
  },
  instructionsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 20,
    textAlign: 'center',
  },
  instructionsList: {
    width: '100%',
    marginBottom: 30,
  },
  instructionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  instructionDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#28a745',
    marginRight: 12,
  },
  instructionText: {
    fontSize: 16,
    color: '#555555',
  },
  recordButton: {
    backgroundColor: '#28a745',
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  videoContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  previewText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 15,
  },
  video: {
    width: '100%',
    height: 400,
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
  },
  uploadButton: {
    backgroundColor: '#28a745',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  retakeButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#dddddd',
  },
  retakeButtonText: {
    color: '#555555',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  }
});