import { isStyledComponent } from 'styled-components';
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 300px;
  max-width: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justifyContent: center;
  align-items: center;
  align-self:center;
  margin-top: 100px;
`;


export const Circle = styled.View`
  margin:0;
  width: 110px;
  height: 110px;
  border: 2.5px solid black;
  border-radius: 55px;
`;

export const Cable = styled.View`
  margin:0;
  width: 70px;
  height: 70px;
  borderBottomWidth: 2.5px;
    translateY:-60px;
    translateX:93px;
    rotation:45; 
`;

export const MessageContainer = styled.View`
  margin:0;
  width: 300px;
  text-align: center;
`;

export const Message = styled.Text`
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
  line-height: 27.6px;
  color: #A1A1A1;
  text-align: center;
`;