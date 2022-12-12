import { describe } from 'vitest';
import { createApp } from './createApp';
import { removeAllNodes } from './removeAllNodes';

describe('removeAllNodes', () => {
  const app = createApp();

  app.innerHTML = `
        <div>
            <h1>Node 1</h1>
        </div>
        <div>
            <h1>Node 2</h1>
        </div>
        <div>
            <h1>Node 3</h1>
        </div>
        <div>
            <h1>Node 4</h1>
        </div>
        <div>
            <h1>Node 5</h1>
        </div>
    `;

  it('should clear the app', () => {
    removeAllNodes(app);
    expect(app.children.length).toBe(0);
  });
});
