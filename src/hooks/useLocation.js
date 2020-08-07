import { useEffect, useState } from 'react';
import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';

export default (shouldTrack, setLocationCallback) => {
  const [err, setErr] = useState('');

  useEffect(() => {
    let subscriber;

    const startWatching = async () => {
      try {
        const { granted } = await requestPermissionsAsync();

        if (!granted) {
          throw new Error('Location permission not granted');
        }
        subscriber = await watchPositionAsync({
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000, // in ms
            distanceInterval: 10, // in meters
          },
          setLocationCallback
        );

        setErr('');
      } catch (e) {
        setErr(e);
      }
    };

    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      subscriber = null;
    }

    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    }
  }, [shouldTrack, setLocationCallback]);
  return [err];
};
