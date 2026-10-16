const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(filterByCategory(products, 'all')).toEqual(products)
  });
  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(filterByCategory(products, undefined)).toEqual(products)
  });
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () =>{
    expect(filterByCategory(products, '')).toEqual(products)
  });
  test("'electronics' возвращает товары с ID [1, 2]", () => {
    const catalog = [
      { id: 1, category: 'electronics' },
      { id: 2, category: 'electronics' }];
    expect(filterByCategory(catalog, 'electronics')).toEqual(catalog);
  });
  test("'books' возвращает товары с ID [3, 6]", () => {
    const catalog = [
      { id: 3, category: 'books' },
      { id: 6, category: 'books' }];
    expect(filterByCategory(catalog, 'books')).toEqual(catalog);
  });
  test("'home' возвращает товары с ID [4, 5]", () => {
    const catalog = [
      { id: 4, category: 'home' },
      { id: 5, category: 'home' }];
    expect(filterByCategory(catalog, 'home')).toEqual(catalog);
  });
  test("'clothes' возвращает пустой массив", () => {
    const catalog = [
      { id: 1, category: 'books' },
      { id: 2, category: 'electronics' },
      { id: 3, category: 'home' }];
    expect(filterByCategory(catalog, 'clothes')).toEqual([]);
  });
  test("'toys' возвращает пустой массив", () => {
    const catalog = [
      { id: 1, category: 'books' },
      { id: 2, category: 'electronics' },
      { id: 3, category: 'home' }];
    expect(filterByCategory(catalog, 'toys')).toEqual([]);
  });
  test("'sports' возвращает пустой массив", () => {
    const catalog = [
      { id: 1, category: 'books' },
      { id: 2, category: 'electronics' },
      { id: 3, category: 'home' }];
    expect(filterByCategory(catalog, 'sports')).toEqual([]);
  });
});
