import { Alert, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Camera, CameraView } from 'expo-camera'
import { CameraType } from 'expo-camera/build/legacy/Camera.types';
import { styles } from './styles';


export default function App() {
  const [startCamera, setStartCamera] = React.useState(false)
  const __startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync()
    if (status === 'granted') {
      setStartCamera(true)
    } else {
      Alert.alert("Acess denied")
    }
  }
  if (!startCamera) {

    return (
      <View
        style={styles.view}
      >
        <TouchableOpacity
          onPress={__startCamera}
        >
          < Text
            style={styles.text}
          >
            Take picture
          </Text >
        </TouchableOpacity >
      </View>
    )
  } {
    return (<CameraView
      style={styles.camera}
    > x </CameraView >)
  }

}

