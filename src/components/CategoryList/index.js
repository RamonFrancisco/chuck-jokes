import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { callCategories } from '../../ducks/categoryDucks/fetchCategories';

const CategoryList = () => {
  const dispatch = useDispatch();

  const categories = useSelector(({ category }) => category.data);

  const fetchCategories = useCallback(() => dispatch(callCategories()), [
    dispatch,
    ,
  ]);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <ul>
      {categories &&
        categories.map((category, index) => <li key={index}>{category}</li>)}
    </ul>
  );
};

export default CategoryList;
