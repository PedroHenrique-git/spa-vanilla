import { describe } from 'vitest';
import { MockComponent } from '../mock/MockComponent';
import { State } from './State';

describe('State', () => {
  const mockState = new State<{ users: string[] }>({
    users: ['user 1', 'user 2', 'user 3'],
  });

  const mockComponent1: MockComponent = new MockComponent(null);
  const mockComponent2: MockComponent = new MockComponent(null);
  const mockComponent3: MockComponent = new MockComponent(null);

  it('state should be an array of strings', () => {
    expect(mockState.getState()?.users).toEqual(['user 1', 'user 2', 'user 3']);
  });

  it('state should an empty array after setState', () => {
    mockState.setState({
      users: [],
    });

    expect(mockState.getState()?.users).toEqual([]);
  });

  it('state should have three subscribers', () => {
    mockState.subscribe(mockComponent1, mockComponent2, mockComponent3);
    expect(mockState.getObservers().length).toBe(3);
  });

  it('state should have two subscribers', () => {
    mockState.unsubscribe(mockComponent1);
    expect(mockState.getObservers().length).toBe(2);
  });
});
