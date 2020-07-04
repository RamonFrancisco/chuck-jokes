import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { callCategories } from '../../ducks/categoryDucks/fetchCategories';
import { callFetchRandomJoke } from '../../ducks/jokeDucks/fetchRandomJoke';

import { CategoryListContainer, CategoryListItem } from './style';

const CategoryList = () => {
  const dispatch = useDispatch();

  const categories = useSelector(({ category }) => category.data);

  const fetchCategories = useCallback(() => dispatch(callCategories()), [
    dispatch,
    ,
  ]);

  const fetchRandomJoke = useCallback(
    categoryName => dispatch(callFetchRandomJoke(categoryName)),
    [dispatch],
  );

  const selectCategory = categoryName => {
    fetchRandomJoke(categoryName);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoryListContainer>
      {categories &&
        categories.map(category => (
          <CategoryListItem
            key={category}
            onClick={() => selectCategory(category)}
          >
            {category}
          </CategoryListItem>
        ))}
    </CategoryListContainer>
  );
};

export default CategoryList;
