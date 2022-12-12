import { describe } from 'vitest';
import { MockComponent } from '../mock/MockComponent';
import { createApp } from './createApp';
import { createContainer } from './createContainer';

describe('createContainer', () => {
  it('should create a container', () => {
    const app = createApp();
    const container = createContainer('main', 'content', app);
    expect(container).toBeInTheDocument();
  });

  it('should wrap a component', () => {
    const app = createApp();

    const container = createContainer('main', 'content', app, (container) => {
      new MockComponent(container);
      new MockComponent(container);
    });

    expect(container.children.length).toBe(2);
  });
});
