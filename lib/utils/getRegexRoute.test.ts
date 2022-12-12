import { describe } from 'vitest';
import { getRegexRoute } from './getRegexRoute';

describe('getRegexRoute', () => {
  it('should return the correct regex for each route', () => {
    expect(String(getRegexRoute('/path/:id'))).toBe(
      String(/^\/path(?:\/([^\/#\?]+?))[\/#\?]?$/i),
    );
    expect(String(getRegexRoute('/path/:id/:id'))).toBe(
      String(/^\/path(?:\/([^\/#\?]+?))(?:\/([^\/#\?]+?))[\/#\?]?$/i),
    );
    expect(String(getRegexRoute('/path/:id/:id/:id'))).toBe(
      String(
        /^\/path(?:\/([^\/#\?]+?))(?:\/([^\/#\?]+?))(?:\/([^\/#\?]+?))[\/#\?]?$/i,
      ),
    );
    expect(String(getRegexRoute('/path/:id/:id/:id/:id'))).toBe(
      String(
        /^\/path(?:\/([^\/#\?]+?))(?:\/([^\/#\?]+?))(?:\/([^\/#\?]+?))(?:\/([^\/#\?]+?))[\/#\?]?$/i,
      ),
    );
  });
});
