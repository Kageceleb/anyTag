import { useEffect, useState } from "react";
import { getCurrentPositionAsync, LocationObject, requestForegroundPermissionsAsync } from "expo-location";

export function Location() {
    const [position, setPosition] = useState<LocationObject | null>(null);
    async function requestLocation() {
        const { granted } = await requestForegroundPermissionsAsync();
        if (granted) {
            const currentPosition = await getCurrentPositionAsync();
            setPosition(currentPosition)
        }
    }
    useEffect(() => {
        requestLocation();
    }, [])
    return ""
};