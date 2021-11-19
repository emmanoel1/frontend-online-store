export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((data) => data.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const queryUrl = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`;
  const getQueryed = await fetch(queryUrl);
  return getQueryed.json();
}
