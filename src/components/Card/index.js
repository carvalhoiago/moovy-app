import { Container, MovieImage, Title,Rating, RatingText, MicButton, PlayButton, DeleteButton, InvisibleButton, ButtonsContainer } from "./styles";
import React, { useState, useRef, useEffect, useCallback} from 'react'
import MicIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import EntypoIcons from 'react-native-vector-icons/Entypo'
import TrashIcon from 'react-native-vector-icons/Octicons'
import { Audio } from 'expo-av';
import { LocalDBapi, ServerURL } from '../../services/api'


export const Card = (props) => {
  // Refs for the audio
  const [AudioRecorder, setAudioRecorder] = useState(useRef(new Audio.Recording()));

  // States for UI
  const [RecordedURI, SetRecordedURI] = useState(props.movie.filename!==null?`${ServerURL}/${props.movie.filename}`:"");
  const [AudioPermission, SetAudioPermission] = useState(false);
  const [IsRecording, SetIsRecording] = useState(false);
  const [sound, setSound] = useState();
  const [movie, setMovie] = useState(props.movie)

  
  // Initial Load to get the audio permission
  useEffect(() => {
    GetPermission();
  }, []);

  useEffect(()=>{
    setMovie(props.movie)
  }, [props])




  // Function to get the audio permission
  const GetPermission = async () => {
    const getAudioPerm = await Audio.requestPermissionsAsync();
    SetAudioPermission(getAudioPerm.granted);
  };
  
  async function playSound() {

    const path = `${ServerURL}/${movie.filename}`

    const { sound } = await Audio.Sound.createAsync({
      uri: path,
    });
    setSound(sound);
    
    await sound.playAsync(); }

  useEffect(() => {
    return sound
      ? () => {
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
      if (result) {
        uploadRecord(result)
      }

      // Reset the Audio Recorder
      AudioRecorder.current = new Audio.Recording();
      SetIsRecording(false);
    } catch (error) {}
  };


  const DeleteRecord = () => {
    props.setMovieModal(movie.Title)
    props.setDeleteFunction(()=>()=>{
      LocalDBapi.put(`/delete-review/${movie.imdbID}`)
      .then((response)=>{
        if(response.status===200){
          setMovie(response.data)
        } else {
          console.log("error when deleting review")
        }
      }).catch(e =>{
        console.log(JSON.stringify(e))
      })

    })
    
  }

  const uploadRecord = (uri) => {
    let formdata = new FormData();
    formdata.append('id', movie.imdbID)
    formdata.append('review',{
      uri: Platform.OS === 'android' ? uri : 'file://' + uri,
      name: `${movie.imdbID}.m4a`,
      type: 'audio/m4a' //mime type what you want
    });
    
    LocalDBapi.put(
      '/upload/', formdata,
      { headers: 
        {
        'Content-Type': `multipart/form-data; boundary=${formdata._boundary}`,
        } 
      })
    .then((response)=>{
      if(response.status===200){
        setMovie(response.data)
      } else {
        console.log("error when uploading review")
      }
    }).catch(e =>{
      console.log(JSON.stringify(e))
    })
  }


  


  return(
    <Container>
      
      <MovieImage
        source={{
          uri: `${movie.Poster}`,
        }}
      />
      <Title>{movie.Title}</Title>
      <Rating>
        <EntypoIcons name="star" size={15} color="#FCC419" />
        <RatingText>8.2</RatingText>
      </Rating>
      {movie.filename === null?
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