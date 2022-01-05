import styled from 'styled-components/native'

export const Container = styled.View`
  align-items: center;
  margin: 10px;
  max-width:300px;
  
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