import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ROUTE_HOME } from '../../defaults/Routes';
import { callCategories } from '../../ducks/categoryDucks/fetchCategories';

import CategoryList from '../../components/CategoryList';
import Container from '../../components/Container';
import Error from '../../components/Error';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Loading from '../../components/Loading';

const Home = () => {
  const dispatch = useDispatch();

  const loading = useSelector(
    ({ category }) => category.loading.callCategories,
  );
  const error = useSelector(
    ({ category }) => category.errors.callCategories,
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
        {!error
          ? (loading
            ? (<Loading />)
            : (<>
              <p>Select a category</p>
              <CategoryList />
            </>))
          : (<Error
            title="Ops failed to search categories "
            text="There was a failure while searching for categories"
            route={ROUTE_HOME} />)
        }
      </Container>
      <Footer />
    </>
  );
};

export default Home;
