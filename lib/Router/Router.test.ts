import { screen } from '@testing-library/dom';
import { describe } from 'vitest';
import { changeRoute, createApp, Router } from '../main';
import { MockComponent } from '../mock/MockComponent';

describe('Router', () => {
  const app = createApp();

  const params: {
    routeDataPage: RouteData | undefined;
    routeDataPageWithParams: RouteData | undefined;
  } = {
    routeDataPage: undefined,
    routeDataPageWithParams: undefined,
  };

  const Page: Page = (routeData) => {
    new MockComponent(app);

    params.routeDataPage = routeData;
  };

  const PageWithParams: Page = (routeData) => {
    new MockComponent(app);

    params.routeDataPageWithParams = routeData;
  };

  new Router(
    {
      '/': Page,
      '/page/:id': PageWithParams,
      '/:slug/p': PageWithParams,
      '/page/:id/:id/:id': PageWithParams,
    },
    app,
  );

  it('should render Page when pathname pathname match with /', () => {
    changeRoute('/');
    expect(screen.getByTestId('1')).toBeInTheDocument();
  });

  it('should render PageWithParams when pathname match with /page/:id', () => {
    changeRoute('/page/1');
    expect(screen.getByTestId('1')).toBeInTheDocument();
  });

  it('should render PageWithParams when pathname match with /page/:id/:id/:id', () => {
    changeRoute('/page/1/2/3');
    expect(screen.getByTestId('1')).toBeInTheDocument();
  });

  it('should contain the correct params to each page', () => {
    changeRoute('/');
    expect(params.routeDataPage?.params).toEqual([]);

    changeRoute('/page/1');
    expect(params.routeDataPageWithParams?.params).toEqual(['1']);

    changeRoute('/product-name/p');
    expect(params.routeDataPageWithParams?.params).toEqual(['product-name']);

    changeRoute('/page/1/2/3');
    expect(params.routeDataPageWithParams?.params).toEqual(['1', '2', '3']);

    changeRoute('/page/1/2/3?name=test&age=20');
    expect(params.routeDataPageWithParams?.params).toEqual(['1', '2', '3']);
    expect(params.routeDataPageWithParams?.queryParams.get('name')).toBe(
      'test',
    );
    expect(params.routeDataPageWithParams?.queryParams.get('age')).toBe('20');
  });
});
