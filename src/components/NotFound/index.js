import { Container, Circle, Cable, IconContainer, MessageContainer, Message } from './styles'

export const NotFound = (props) => {
  return (
    <Container>
      <>
        <Circle/>
        <Cable />
      </>
      <MessageContainer>
        <Message>{props.children}</Message>
      </MessageContainer>
    </Container>
  );
}