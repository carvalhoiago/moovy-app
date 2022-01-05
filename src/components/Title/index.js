import { Container } from "./styles";

export const Title = (props) => {

  return(
    <Container>
      {props.children}
    </Container>
  )
};

export default Title;