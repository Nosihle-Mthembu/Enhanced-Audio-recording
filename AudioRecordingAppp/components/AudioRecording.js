import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const AudioRecording = () => {
  const [recording, setRecording] = useState(null);
  const [playing, setPlaying] = useState(false);

  const startRecording = async () => {
    try {
      const audioPath = await AudioRecorderPlayer.startRecorder();
      setRecording(audioPath);
    } catch (error) {
      alert('An error occurred while starting recording');
    }
  };

  const stopRecording = async () => {
    try {
      const audioPath = await AudioRecorderPlayer.stopRecorder();
      setRecording(audioPath);
    } catch (error) {
      alert('An error occurred while stopping recording');
    }
  };

  const playRecording = async () => {
    try {
      await AudioRecorderPlayer.startPlayer();
      setPlaying(true);
    } catch (error) {
      alert('An error occurred while playing recording');
    }
  };

  const stopPlayback = async () => {
    try {
      await AudioRecorderPlayer.stopPlayer();
      setPlaying(false);
    } catch (error) {
      alert('An error occurred while stopping playback');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Audio Recording</Text>
      <Button title="Start Recording" onPress={startRecording} />
      <Button title="Stop Recording" onPress={stopRecording} />
      <Button title="Play Recording" onPress={playRecording} />
      <Button title="Stop Playback" onPress={stopPlayback} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#333',
  },
});

export default AudioRecording;
