import { describe } from 'vitest';
import { createFragment } from './createFragment';

describe('createFragment', () => {
  it('should create a DocumentFragment from a string', () => {
    const template = createFragment(`
            <div>
                <h1>Fragment</h1>
            </div>
        `);

    expect(template.nodeName).toBe('#document-fragment');
  });

  it('should create a correct html structure', () => {
    const template = createFragment(`
            <div>
                <h1>Fragment</h1>
            </div>
        `);

    expect(template.children[0].tagName).toBe('DIV');
    expect(template.children[0].children[0].tagName).toBe('H1');
  });
});
