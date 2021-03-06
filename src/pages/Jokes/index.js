import React, { useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BsArrowLeftShort } from 'react-icons/bs';

import { ROUTE_HOME } from '../../defaults/Routes';
import { callFetchRandomJoke } from '../../ducks/jokeDucks/fetchRandomJoke';

import Button from '../../components/Button';
import Container from '../../components/Container';
import Error from '../../components/Error';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Loading from '../../components/Loading';

import {
  BackCategories,
  Content,
  JokeContent,
  JokeImage,
  JokeSmallText,
  JokeText,
} from './style';

const Jokes = () => {
  const { categoryName } = useParams();
  const dispatch = useDispatch();

  const data = useSelector(({ jokes }) => jokes.data);
  const loading = useSelector(({ jokes }) => jokes.loading.fetchRandomJoke);
  const error = useSelector(({ jokes }) => jokes.errors.fetchRandomJoke);
  const handleJokeRequest = useCallback(
    () => dispatch(callFetchRandomJoke(categoryName)),
    [dispatch, categoryName],
  );

  useEffect(() => {
    handleJokeRequest();
  }, [handleJokeRequest]);

  return (
    <>
      <Header />
      <Container>
        {!error
          ? (
            <Content>
              {loading
                ? (<Loading />)
                : (<>
                  <BackCategories to={ROUTE_HOME}>
                    <BsArrowLeftShort /> back
                  </BackCategories>
                  <JokeContent>
                    <JokeImage src={data.icon_url} alt="Chuck Norris" />
                    <div>
                      <JokeText>{data.value}</JokeText>
                      <JokeSmallText>
                        category: {categoryName}
                      </JokeSmallText>
                    </div>
                  </JokeContent>
                </>)
              }
              <Button onClick={handleJokeRequest}>See another joke</Button>
            </Content>)
          : (<Error
            title="Ops Failed to load joke!"
            text="There was a failure to find the joke"
            route={`/category/${categoryName}`} />)
        }
      </Container>
      <Footer />
    </>
  );
};

export default Jokes;
