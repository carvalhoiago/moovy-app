import { 
  Container, 
  BlackBack, 
  Modal, 
  Title, 
  Message,
  ConfirmButton,
  CancelButton,
  ButtonText
} from "./styles";


export const ConfirmModal = (props) => {
 const cancel = () => {
  props.setMovieModal("")
 }

 const deleteReview = () => {
  props.setMovieModal("")
  props.deleteFunction()
 }
  return(
    <Container>
      <BlackBack>
        <Modal>
          <Title>Delete audio</Title>
          <Message>Are you sure you want to delete "{props.title}" review?</Message>
          <ConfirmButton onPress={deleteReview}>
            <ButtonText>Delete</ButtonText>
          </ConfirmButton>
          <CancelButton onPress={cancel}>
            <ButtonText>Cancel</ButtonText>
          </CancelButton>
        </Modal>
      </BlackBack>
    </Container>
  );
}

