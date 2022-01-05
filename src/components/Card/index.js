import { Container, MovieImage, Title,Rating, RatingText, MicButton, PlayButton, DeleteButton, InvisibleButton, ButtonsContainer } from "./styles";
import React, { useState, useRef, useEffect, useCallback} from 'react'
import MicIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import EntypoIcons from 'react-native-vector-icons/Entypo'
import TrashIcon from 'react-native-vector-icons/Octicons'
import { Audio } from 'expo-av';
import { ConfirmModal } from "../ConfirmModal";

export const Card = (props) => {
  // Refs for the audio
  const [AudioRecorder, setAudioRecorder] = useState(useRef(new Audio.Recording()));

  // States for UI
  const [RecordedURI, SetRecordedURI] = useState("");
  const [AudioPermission, SetAudioPermission] = useState(false);
  const [IsRecording, SetIsRecording] = useState(false);
  const [sound, setSound] = useState();

  
  // Initial Load to get the audio permission
  useEffect(() => {
    GetPermission();
  }, []);


  // Function to get the audio permission
  const GetPermission = async () => {
    const getAudioPerm = await Audio.requestPermissionsAsync();
    SetAudioPermission(getAudioPerm.granted);
  };
  
  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync({
      uri: RecordedURI,
    });
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  

  // Function to start recording
  const StartRecording = async () => {
    try {
      // Check if user has given the permission to record
      if (AudioPermission === true) {
        try {
          // Prepare the Audio Recorder
          await AudioRecorder.current.prepareToRecordAsync(
            Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
          );

          // Start recording
          await AudioRecorder.current.startAsync();
          SetIsRecording(true);
        } catch (error) {
          console.log(error);
        }
      } else {
        // If user has not given the permission to record, then ask for permission
        GetPermission();
      }
    } catch (error) {}
  };

  // Function to stop recording
  const StopRecording = async () => {
    try {
      // Stop recording
      await AudioRecorder.current.stopAndUnloadAsync();

      // Get the recorded URI here
      const result = AudioRecorder.current.getURI();
      if (result) SetRecordedURI(result || URIFROMFileSystem);
      console.log(result)

      // Reset the Audio Recorder
      AudioRecorder.current = new Audio.Recording();
      SetIsRecording(false);
      playSound()
    } catch (error) {}
  };


  const DeleteRecord = () => {
    props.setMovieModal(props.movie.Title)
    props.setDeleteFunction(()=>()=>SetRecordedURI(""))
    
  }



  return(
    <Container>
      
      <MovieImage
        source={{
          uri: `${props.movie.Poster}`,
        }}
      />
      <Title>{props.movie.Title}</Title>
      <Rating>
        <EntypoIcons name="star" size={15} color="#FCC419" />
        <RatingText>X.X</RatingText>
      </Rating>
      {RecordedURI === ""?
        <MicButton
          onPressIn={StartRecording}
          onPressOut={StopRecording}
        >
          <MicIcon name="microphone-outline" size={30} color="#000" />
        </MicButton>
      :
        <ButtonsContainer>
          <DeleteButton onPress={DeleteRecord}>
          <TrashIcon name="trashcan" size={17} color="#000" />
          </DeleteButton>
          <PlayButton onPress={playSound}>
            <EntypoIcons name="controller-play" size={25} color="#12153D" />
          </PlayButton>
        </ButtonsContainer>
      }
      

    </Container>
  )
};

export default Card;