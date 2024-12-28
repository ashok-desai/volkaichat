import React, {ReactNode, useState} from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import {scale} from 'react-native-size-matters';

interface CustomInputProps extends TextInputProps {
  label?: string; // Optional label text above the input
  inputStyle?: TextStyle; // Style for the TextInput
  labelStyle?: TextStyle; // Style for the label
  icon?: ReactNode; // Optional left icon
  secureIcon?: ReactNode; // Optional right icon for secureTextEntry (eye)
  secureTextEntry?: boolean; // Optional secureTextEntry to toggle password visibility
  value?: string; // Value for the input
  onChangeText?: (text: string) => void; // onChangeText handler
}

const Input: React.FC<CustomInputProps> = ({
  label,
  secureTextEntry = false,
  style,
  labelStyle,
  icon,
  secureIcon,
  ...props
}) => {
  const [isSecureEntry, setIsSecureEntry] = useState<boolean>(secureTextEntry);

  const toggleSecureEntry = () => {
    setIsSecureEntry(!isSecureEntry);
  };

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <View style={styles.inputWrapper}>
        {icon && <View style={styles.leftIcon}>{icon}</View>}

        {/* TextInput */}
        <TextInput
          style={[styles.input]}
          secureTextEntry={isSecureEntry}
          {...props}
        />
        {/* Right Icon for secureTextEntry */}
        {secureTextEntry && secureIcon && (
          <TouchableOpacity
            onPress={toggleSecureEntry}
            style={styles.rightIcon}>
            {secureIcon}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    borderColor: '#0000ff',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    paddingVertical: scale(2),
    paddingHorizontal: scale(4),
  },
  leftIcon: {
    marginLeft: 9,
    marginRight: 7, // Adjust for spacing between the icon and input
  },
  rightIcon: {
    position: 'absolute',
    right: 12,
    padding: 5,
  },
  input: {
    flex: 1,

    fontSize: 16,
    color: '#333',
  },
  inputWithLeftIcon: {
    paddingLeft: 40, // Add space for the left icon
  },
});

export default Input;
