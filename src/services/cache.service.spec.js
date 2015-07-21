import cacheService from 'services/cache.service';

describe('when saving an object', () => {
  const key = 'some_key';
  const value = {
    some: 'value'
  };
  beforeEach(() => {
    cacheService.clear();
    cacheService.set(key, value);
  });

  it('should expect to get the same object back', () => {
    const expected = cacheService.get(key);
    expect(expected).toEqual(value);
  });

  describe('when removing this item from cache', () => {
    beforeEach(() => {
      cacheService.remove(key);
    });

    it('should not find the item anymore', () => {
      const expected = cacheService.get(key);
      expect(expected).toBe(null);
    });
  });

  describe('when clearing the cache', () => {
    beforeEach(() => {
      cacheService.clear();
    });

    it('should not find the item anymore', () => {
      const expected = cacheService.get(key);
      expect(expected).toBe(null);
    });
  });
});
