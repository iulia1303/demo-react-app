import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

interface FormData {
  username: string;
  email: string;
  theme: string;
}

const ModalScreen: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: 'AdminUser',
    email: 'admin@example.com',
    theme: 'Light',
  });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (key: keyof FormData, value: string) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSave = () => {
    setShowToast(true);

    // Hide the toaster after 3 seconds
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Username</Text>
          <TextInput
              style={styles.input}
              value={formData.username}
              onChangeText={(value) => handleChange('username', value)}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
              style={styles.input}
              value={formData.email}
              onChangeText={(value) => handleChange('email', value)}
              keyboardType="email-address"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Theme</Text>
          <TextInput
              style={styles.input}
              value={formData.theme}
              onChangeText={(value) => handleChange('theme', value)}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Save Settings" onPress={handleSave} />
        </View>

        {showToast && (
            <View style={styles.toast}>
              <Text style={styles.toastText}>Settings saved successfully!</Text>
            </View>
        )}
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  formGroup: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
  },
  toast: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
  },
  toastText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default ModalScreen;
