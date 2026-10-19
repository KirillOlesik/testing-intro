const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
   test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const sorted = sortProductsByPrice(products, 'asc');
    const resultIds = sorted.map(product => product.id);
    expect(resultIds).toEqual([3, 6, 5, 4, 2, 1]);
  });
test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
    const sorted = sortProductsByPrice(products);
    const resultIds = sorted.map(product => product.id);
    expect(resultIds).toEqual([3, 6, 5, 4, 2, 1]);
  });
  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {

  const localProducts = [
    { id: 1, price: 500 },
    { id: 3, price: 100 },
    { id: 4, price: 200 }
  ];

  const sorted = sortProductsByPrice(localProducts, 'asc');
  expect(sorted.map(p => p.id)).toEqual([3, 4, 1]);
});
  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    const sorted = sortProductsByPrice(products, 'desc');
    const resultIds = sorted.map(product => product.id);
    expect(resultIds).toEqual([1, 2, 4, 5, 6, 3]);
  });
  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const localProducts = [
    { id: 1, price: 500 },
    { id: 3, price: 100 },
    { id: 4, price: 200 }
  ];

  const sorted = sortProductsByPrice(localProducts, 'desc');
  expect(sorted.map(p => p.id)).toEqual([1, 4, 3]);
  });
  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const localProducts = [
    { id: 5, price: 200 },
    { id: 6, price: 100 },
    { id: 2, price: 500 }
  ];

  const sorted = sortProductsByPrice(localProducts, 'desc');
  expect(sorted.map(p => p.id)).toEqual([2, 5, 6]);
  });
test("'asc' не меняет исходный массив [1, 3, 4]", () => {
  const localProducts = [
    { id: 1, price: 100 },
    { id: 3, price: 300 },
    { id: 4, price: 400 }
  ];

  const localProductsCopy = JSON.parse(JSON.stringify(localProducts));
  const sorted = sortProductsByPrice(localProducts, 'asc');
  expect(sorted.map(p => p.id)).toEqual([1, 3, 4]);
  expect(localProducts).toEqual(localProductsCopy);
  });
  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
  const localProducts = [
    { id: 1, price: 100 },
    { id: 3, price: 300 },
    { id: 4, price: 400 }
  ];

  const localProductsCopy = JSON.parse(JSON.stringify(localProducts));
  const sorted = sortProductsByPrice(localProducts, 'desc');
  expect(sorted.map(p => p.id)).toEqual([4, 3, 1]);
  expect(localProducts).toEqual(localProductsCopy);
  });
  test('направление по умолчанию не меняет исходный массив всех товаров', () => {
  const initialIds = products.map(p => p.id);
  sortProductsByPrice(products, 'asc');
  const postSortIds = products.map(p => p.id);
  expect(postSortIds).toEqual(initialIds);
  });
});
