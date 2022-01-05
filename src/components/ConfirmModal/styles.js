import styled from 'styled-components/native'

export const Container = styled.View`
  position: absolute;
  flex:1;
  z-index: 1;
  height: 100%
  width: 100%;
`;

export const BlackBack = styled.View`
  position: relative;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.View`
  position: absolute;
  width: 318px;
  height: 446px;
  border-radius: 15px;
  background: white;
  padding: 60px;
  top: 166px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  {/*font-family: Arial;*/}
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 29px;
  color: #000000;
  margin: 10px 0;
`;

export const Message = styled.Text`
  {/*font-family: Arial;*/}
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
  margin: 50px 0;
`;

export const ConfirmButton = styled.TouchableHighlight`
  width: 288px;
  height: 47px;
  background: #FE6D8E;
  border-radius: 10px;
  margin: 10px 0;
`;

export const CancelButton = styled.TouchableHighlight`
  width: 288px;
  height: 47px;
  background: #A1A1A1;
  border-radius: 10px;
  margin: 10px 0;
`;

export const ButtonText = styled.Text`
  {/*font-family: Arial;*/}
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 34px;
  text-align: center;

  color: #FFFFFF;
`;
