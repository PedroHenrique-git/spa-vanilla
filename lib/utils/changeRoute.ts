import { dispatchNavigationEvent } from './dispatchNavigationEvent';

export function changeRoute(path: string, data: any = {}, unused = '') {
  window.history.pushState(data, unused, path);
  dispatchNavigationEvent();
}
