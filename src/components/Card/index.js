import { Container, MovieImage, Title,Rating, RatingText, MicButton } from "./styles";
import React, { useState} from 'react'
import MicIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import StarIcon from 'react-native-vector-icons/Entypo'


export const Card = (props) => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return(
    <Container>
      <MovieImage
        source={{
          uri: `${props.movie.Poster}`,
        }}
      />
      <Title>{props.movie.Title}</Title>
      <Rating>
        <StarIcon name="star" size={15} color="#FCC419" />
        <RatingText>{count}</RatingText>
      </Rating>
      <MicButton
        onPressIn={onPress}
        onPressOut={onPress}
      >
        <MicIcon name="microphone-outline" size={30} color="#000" />
      </MicButton>
    </Container>
  )
};

export default Card;