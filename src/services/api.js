export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((data) => data.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const queryUrl = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const getQueryed = await fetch(queryUrl);
  return getQueryed.json();
}

export async function getProductsFromProductID(PRODUCT_ID) {
  const fetchByProduct = `https://api.mercadolibre.com/items/${PRODUCT_ID}`;
  const productSearched = await fetch(fetchByProduct);
  return productSearched.json();
}

// na linha 7 na monitoria porfessor madou tirar o _id
