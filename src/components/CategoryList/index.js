import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { CategoryListContainer, CategoryListItem } from './style';

const CategoryList = () => {
  const categories = useSelector(({ category }) => category.data);

  return (
    <CategoryListContainer>
      {categories &&
        categories.map((category) => (
          <CategoryListItem key={category}>
            <Link to={`/category/${category}`}>{category}</Link>
          </CategoryListItem>
        ))}
    </CategoryListContainer>
  );
};

export default CategoryList;
