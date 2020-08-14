import React, { useContext } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapView, {Polyline, Circle} from 'react-native-maps';
import keys from '../../keystore';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
  // let points = [];
  //
  // for (let i = 0; i < 20; i++) {
  //   if(i%2 ===0) {
  //     points.push({
  //       latitude: keys.BASE_LAT + i * 0.001,
  //       longitude: keys.BASE_LONG + i * 0.001,
  //     });
  //   }else{
  //     points.push({
  //       latitude: keys.BASE_LAT - i * 0.002,
  //       longitude: keys.BASE_LONG + i * 0.001,
  //     });
  //   }
  // }

  const { state: { currentLocation, locations } } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ alignSelf:'center',marginTop:'45%'}} />
  }

  // TODO: refocus map if circle goes outside the bounding box set by long and lat delta
  return (
    <MapView
      style={styles.map}
      // initialRegion sets the center of the map on startup
      initialRegion={{
        ...currentLocation.coords,
        ...keys.DELTAS,
      }}
      // region updated the center of the map as we go
      region={{
        ...currentLocation.coords,
        ...keys.DELTAS,
      }}
    >
      <Circle
        center={currentLocation.coords}
      radius={currentLocation.coords.accuracy * 10}
        strokeColor="rgba(158, 158, 255, 1.0)"
        fillColor="rgba(158, 158, 255, 0.3)"
      />
      <Polyline coordinates={locations.map(loc => loc.coords)} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
