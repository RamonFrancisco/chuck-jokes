import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { callCategories } from '../../ducks/categoryDucks/fetchCategories';

import CategoryList from '../../components/CategoryList';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Loading from '../../components/Loading';

const Home = () => {
  const dispatch = useDispatch();

  const loading = useSelector(
    ({ category }) => category.loading.callCategories,
  );
  const categories = useSelector(({ category }) => category.data);

  const handleCategoriesRequest = useCallback(
    () => dispatch(callCategories()),
    [dispatch],
  );

  useEffect(() => {
    if (!categories.length) {
      handleCategoriesRequest();
    }
  }, [handleCategoriesRequest, categories]);

  return (
    <>
      <Header />
      <Container>
        {loading
          ? (<Loading />)
          : (<>
            <p>Select a category</p>
            <CategoryList />
          </>)
        }
      </Container>
      <Footer />
    </>
  );
};

export default Home;
