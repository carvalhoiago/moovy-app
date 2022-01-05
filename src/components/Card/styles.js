import styled from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
  margin: 10px 0;
  width:300px;
  
`;

export const MovieImage = styled.Image`
  width: 273px;
  height: 486px;
  border-radius: 20px;
`;

export const Title = styled.Text`
  {/*font-family: Proxima Nova;*/}
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: #12153D;
  max-width:300px;
`;

export const Rating = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RatingText = styled.Text`
{/*font-family: Proxima Nova;*/}
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
margin-left: 5px;
color: #434670;
`;

export const MicButton = styled.TouchableHighlight`
  width: 54.23px;
  height: 54.23px;
  background: #6CD3AE;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlayButton = styled.TouchableHighlight`
  width: 48px;
  height: 48px;
  background: #A1A1A1;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 126px;
`;

export const DeleteButton = styled.TouchableHighlight`
  width: 36px;
  height: 36px;
  background: #FE6D8E;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export const ButtonsContainer = styled.View`
  width: 300px;
  max-width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InvisibleElement = styled.View`
width: 36px;
height: 36px;
border-radius: 18px;

display: none;
justify-content: center;
align-items: center;
`;