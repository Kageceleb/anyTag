import { CameraView, CameraType, useCameraPermissions, Camera } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../styles';

export default function CameraTeste() {
    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View style={styles.container}>
                <Camera
                    style={{ flex: 1, width: 100 %}}
                    ref={(r) => {
                        camera = r
                    }}></Camera>
            </View>
        );
    }

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    return (
        <View style={styles.container}>
            <CameraView style={styles.container} facing={facing}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.container} onPress={toggleCameraFacing}>
                        <Text style={styles.container}>Flip Camera</Text>
                    </TouchableOpacity>
                </View>
            </CameraView>
        </View>
    );
}
