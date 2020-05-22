import { createSelector } from 'reselect';

const selectCollection = (state) => state.collection;

export const selectCollectionCategories = createSelector(
  [selectCollection],
  (collection) => collection.categories
);

export const selectCollectionCategoriesForPreview = createSelector(
  [selectCollectionCategories],
  (categories) =>
    categories ? Object.keys(categories).map((key) => categories[key]) : []
);

export const selectCollectionCategory = (categoryUrlParam) =>
  createSelector([selectCollectionCategories], (categories) =>
    categories ? categories[categoryUrlParam] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectCollection],
  (collection) => collection.isFetching
);

export const selectIsCollectionFetched = createSelector(
  [selectCollection],
  (collection) => !!collection.categories
);
