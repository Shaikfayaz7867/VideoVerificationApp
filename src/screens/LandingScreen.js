import React from "react";
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  Image,
  StatusBar 
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// You would need to import your logo here
// import universityLogo from '../assets/logo.png';

const LandingScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Logo section */}
      <View style={styles.logoContainer}>
        {/* <Image source={universityLogo} style={styles.logo} /> */}
        <Text style={styles.logoText}>PJTSAU</Text>
      </View>
      
      {/* Content section */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Video Verification</Text>
        <Text style={styles.subtitle}>
          Complete your identity verification by recording a short video
        </Text>
        
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <View style={styles.infoIcon}>
              <Text style={styles.infoIconText}>1</Text>
            </View>
            <Text style={styles.infoText}>Position your face clearly in the frame</Text>
          </View>
          
          <View style={styles.infoItem}>
            <View style={styles.infoIcon}>
              <Text style={styles.infoIconText}>2</Text>
            </View>
            <Text style={styles.infoText}>Ensure good lighting for clear visibility</Text>
          </View>
          
          <View style={styles.infoItem}>
            <View style={styles.infoIcon}>
              <Text style={styles.infoIconText}>3</Text>
            </View>
            <Text style={styles.infoText}>Speak your name clearly when prompted</Text>
          </View>
        </View>
      </View>
      
      {/* Button section */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("VideoVerification")}
      >
        <Text style={styles.buttonText}>START VERIFICATION</Text>
      </TouchableOpacity>
      
      {/* Footer section */}
      <Text style={styles.footerText}>
        Your data is secure and will only be used for verification purposes
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  logo: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#121212',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 40,
    lineHeight: 22,
  },
  infoContainer: {
    marginBottom: 40,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  infoIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#e8f5e9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  infoIconText: {
    color: '#28a745',
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 15,
    color: '#555555',
    flex: 1,
  },
  button: {
    backgroundColor: '#28a745',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  footerText: {
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
    marginBottom: 20,
  }
});

export default LandingScreen;