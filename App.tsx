import { Alert, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Camera, CameraView } from 'expo-camera'
import { CameraType } from 'expo-camera/build/legacy/Camera.types';


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
        style={{
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <TouchableOpacity
          onPress={__startCamera}
        >
          < Text
            style={{
              color: '#222',
              fontWeight: 'bold',
              textAlign: 'center'
            }
            }
          >
            Take picture
          </Text >
        </TouchableOpacity >
      </View>
    )
  } {
    return (<CameraView
      style={{ flex: 1, width: "100%" }}
    ></CameraView >)
  }

}

