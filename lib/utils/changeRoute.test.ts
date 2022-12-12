import { describe } from 'vitest';
import { changeRoute } from './changeRoute';

describe('changeRoute', () => {
  it('should change pathname', () => {
    changeRoute('/page/page1/page2');
    expect(window.location.pathname).toBe('/page/page1/page2');

    changeRoute('/page/1/2/3/4/5');
    expect(window.location.pathname).toBe('/page/1/2/3/4/5');

    changeRoute('/product-page');
    expect(window.location.pathname).toBe('/product-page');

    changeRoute('/product-page');
    expect(window.location.pathname).toBe('/product-page');
  });
});
