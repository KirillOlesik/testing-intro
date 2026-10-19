const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    const result = searchProducts(products, 'Наушники');
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(1);
  });
  test("'Чистый код' возвращает товар с ID 6", () => {
  const result = searchProducts(products, 'Чистый код');
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(6);
     });
  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const result = searchProducts(products, 'Настольная лампа');
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(4);
  });
  test("'javascript' возвращает товар с ID 3", () => {
    const result = searchProducts(products, 'javascript');
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(3);
  });
  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    const result = searchProducts(products, 'ЧЕХОЛ');
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(5);
  });
  test("'наушники' возвращает товар с ID 1", () => {
    const result = searchProducts(products, 'наушники');
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(1);
  });
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () =>{
  expect(searchProducts(products, '')).toEqual(products)
  });
  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () =>{
  expect(searchProducts(products, ' ')).toEqual(products)
  });
  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () =>{
  expect(searchProducts(products, '\t\n')).toEqual(products)
  });
});
