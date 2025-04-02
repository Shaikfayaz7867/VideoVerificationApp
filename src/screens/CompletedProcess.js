import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, Animated, Easing } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CompletedProcess = () => {
  const navigation = useNavigation();
  const scaleAnim = new Animated.Value(0);
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    // Animation for the check mark
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 400,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 8,
        useNativeDriver: true,
      })
    ]).start();

    // Animation for the text content
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      delay: 400,
      useNativeDriver: true,
    }).start();

    // Auto-navigate to home after 5 seconds
    const timer = setTimeout(() => {
      navigation.navigate('Landing');
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Animated.View style={[
          styles.checkCircle, 
          { transform: [{ scale: scaleAnim }] }
        ]}>
          <Image 
            source={require('../assets/check-icon.png')}
            style={styles.checkIcon}
            // Fallback if image not available
            defaultSource={{ uri: 'https://cdn-icons-png.flaticon.com/512/9516/9516480.png' }}
          />
        </Animated.View>

        <Animated.View style={[styles.textContainer, { opacity: fadeAnim }]}>
          <Text style={styles.title}>Verification in Progress</Text>
          
          <Text style={styles.description}>
            Your video has been successfully submitted. Our team will review it shortly.
          </Text>
          
          <View style={styles.notificationInfo}>
            <View style={styles.infoItem}>
              <Image 
                source={require('../assets/sms-icon.png')} 
                style={styles.infoIcon}
                
              />
              <Text style={styles.infoText}>SMS confirmation will be sent to your registered mobile</Text>
            </View>
            
            <View style={styles.infoItem}>
              <Image 
                source={require('../assets/email-icon.png')} 
                style={styles.infoIcon} 
              />
              <Text style={styles.infoText}>Email notification will be sent with next steps</Text>
            </View>
          </View>
          
          <Text style={styles.thanks}>Thank you for your cooperation!</Text>
          
          <Text style={styles.redirecting}>
            Redirecting to home screen in a few seconds...
          </Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  checkCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#e8f5e9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  checkIcon: {
    width: 60,
    height: 60,
    tintColor: '#28a745',
  },
  textContainer: {
    alignItems: 'center',
    maxWidth: 320,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  notificationInfo: {
    width: '100%',
    marginBottom: 30,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
  },
  infoIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
    tintColor: '#28a745',
  },
  infoText: {
    fontSize: 14,
    color: '#555555',
    flex: 1,
  },
  thanks: {
    fontSize: 18,
    fontWeight: '600',
    color: '#28a745',
    marginBottom: 20,
    textAlign: 'center',
  },
  redirecting: {
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
  },
});

export default CompletedProcess;