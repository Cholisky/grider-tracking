import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { Text } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';
import keys from '../../keystore';

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam('_id');

  const track = state.find(t => t._id === _id);

  const initialCoords = track.locations[0].coords;


  return (
    <>
      <Text h3 style={styles.header}>{track.name}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          ...keys.DELTAS,
          ...initialCoords,
        }}
      >
        <Polyline coordinates={track.locations.map(location => location.coords)} />
      </MapView>
    </>
  );
};

TrackDetailScreen.navigationOptions = () => ({
  title: 'Track',
  headerTitleAlign: 'center',
});

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
  header: {
    textAlign: 'center',
  },
});

export default TrackDetailScreen;
