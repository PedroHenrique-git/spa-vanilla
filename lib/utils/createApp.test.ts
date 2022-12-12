import { describe } from 'vitest';
import { createApp } from './createApp';

describe('createApp', () => {
  it('should render app in the document', () => {
    const app = createApp();
    expect(app).toBeInTheDocument();
  });
});
