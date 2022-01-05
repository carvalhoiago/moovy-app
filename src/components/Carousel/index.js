import { Container, ScrollItems } from "./styles";
import { ScrollView, StyleSheet } from "react-native";
import { Card } from '../Card'

export const Carousel = (props) => {

  const styles = (size) => StyleSheet.create({
    contentContainer: {
      width: size
    }
  })

  return (
    <Container>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles(Object.keys(props.content).length*300).contentContainer}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
      >
        {props.content.map((movie, index)=>{
          return(
            <Card key={index} movie={movie} />
          )
        })}
      </ScrollView>
    </Container>
  );
}