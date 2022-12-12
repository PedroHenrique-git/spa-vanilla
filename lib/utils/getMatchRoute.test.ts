import { describe } from 'vitest';
import { getMatchRoute } from './getMatchRoute';

describe('getMatchRoute', () => {
  it('should return true for each route', () => {
    expect(!!getMatchRoute('/page/:id', '/page/1')).toBe(true);
    expect(!!getMatchRoute('/product/:name', '/product/shirts')).toBe(true);
    expect(!!getMatchRoute('/:slug/:id', '/product-name/10')).toBe(true);
    expect(
      !!getMatchRoute('/:order/:category/:color', '/order-desc/t-shirts/blue'),
    ).toBe(true);
  });

  it('should return false for each route', () => {
    expect(!!getMatchRoute('/page/:id', '/a/1')).toBe(false);
    expect(!!getMatchRoute('/product/:name', '/product/')).toBe(false);
    expect(!!getMatchRoute('/:slug/:id', 'product-name/10')).toBe(false);
    expect(!!getMatchRoute('/:order/:category/:color', '//t-shirts/')).toBe(
      false,
    );
  });
});
