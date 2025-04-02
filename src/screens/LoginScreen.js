import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Corrected image import path
import backgroundImage from '../assets/background.jpg';
import universityLogo from '../assets/logo.png';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    if (phoneNumber.length === 10) {
      navigation.navigate("Otp", { phoneNumber });
    } else {
      alert("Enter a valid 10-digit phone number");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <View style={styles.logoContainer}>
        <Image
          source={universityLogo}
          style={styles.logo}
        />
        <Text style={styles.logoText}>PJTSAU</Text>
      </View>
      
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>
          Enter your phone number to continue
        </Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>PHONE NUMBER</Text>
          <View style={styles.phoneInputWrapper}>
            <Text style={styles.countryCode}>+91</Text>
            <TextInput
              style={styles.input}
              placeholder="10-digit mobile number"
              placeholderTextColor="#9E9E9E"
              keyboardType="phone-pad"
              maxLength={10}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
          </View>
        </View>
        
        <TouchableOpacity 
          style={[
            styles.button, 
            phoneNumber.length === 10 ? styles.buttonActive : styles.buttonInactive
          ]} 
          onPress={handleLogin}
          disabled={phoneNumber.length !== 10}
        >
          <Text style={styles.buttonText}>CONTINUE</Text>
        </TouchableOpacity>
        
        <Text style={styles.termsText}>
          By continuing, you agree to our{' '}
          <Text style={styles.linkText}>Terms of Service</Text>{' '}
          and{' '}
          <Text style={styles.linkText}>Privacy Policy</Text>
        </Text>
      </View>
      
      <Text style={styles.footerText}>
        Professor Jayashankar Telangana State Agricultural University
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 40,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#28a745',
  },
  contentContainer: {
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666666',
    marginBottom: 8,
    letterSpacing: 1,
  },
  phoneInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingBottom: 5,
  },
  countryCode: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
    paddingVertical: 8,
  },
  button: {
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonActive: {
    backgroundColor: '#28a745',
  },
  buttonInactive: {
    backgroundColor: '#E0E0E0',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  termsText: {
    fontSize: 12,
    color: '#666666',
    marginTop: 20,
    textAlign: 'center',
    lineHeight: 18,
  },
  linkText: {
    color: '#28a745',
    fontWeight: '500',
  },
  footerText: {
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
  }
});

export default LoginScreen;