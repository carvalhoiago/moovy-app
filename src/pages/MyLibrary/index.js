import { Container, TitleContainer } from "./styles";
import { Title } from '../../components/Title'
import { Carousel } from "../../components/Carousel";
import { useState, useEffect, useCallback } from "react";
import { LocalDBapi } from "../../services/api";
import { NotFound } from '../../components/NotFound'
import { RefreshControl, ScrollView } from 'react-native'

export const MyLibrary = () => {
  const [movies, setMovies] = useState([])
  const [refreshing, setRefreshing] = useState(false)

  const getMovies = () => {
    setRefreshing(true);
    LocalDBapi.get('/movies')
    .then((response)=>{
      if(response.status === 200){
        setMovies(response.data)
      }
      setRefreshing(false)
    })
  }

  useEffect(()=>{
    getMovies()
  },[])


  const onRefresh = useCallback(() => {
    getMovies()
  }, []);

  return(
    <Container>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <TitleContainer>
          <Title>My Library</Title>
        </TitleContainer>
        {Object.keys(movies).length === 0?
          <NotFound>It looks like there are no movies in your library! Go to you web application and add some! </NotFound>
          :
          <Carousel content={movies}/>
        }
      </ScrollView>
    </Container>
  )
};

export default MyLibrary;