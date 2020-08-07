import React, { useContext } from 'react';
import { Button, Input } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';

const TrackForm = () => {
  const { state: { name, recording, locations }, startRecording, stopRecording, changeName } = useContext(LocationContext);

  console.log(locations.length)

  return (
    <>
      <Spacer>
        <Input value={name} onChangeText={changeName} placeholder="Enter Name" />
      </Spacer>
      <Spacer>
        {/*<Button title={recording ? 'Stop Recording' : 'Start Recording'} onPress={recording ? stopRecording : startRecording} />*/}
        {recording ?
          <Button title={'Stop'} onPress={stopRecording} /> :
          <Button title={'Start Recording'} onPress={startRecording} />
        }
      </Spacer>
    </>
  );
};

export default TrackForm;
