import { Plateau } from '../plateau';

describe('plateau', () => {
  describe('is in bounds', () => {
    it('returns true if a coordinate is in bounds', () => {
      const plateau = new Plateau(2, 2);

      expect(plateau.isInBounds(0, 0)).toBe(true);
      expect(plateau.isInBounds(1, 0)).toBe(true);
      expect(plateau.isInBounds(0, 1)).toBe(true);
      expect(plateau.isInBounds(1, 1)).toBe(true);
    });

    it('returns false if a coordinate is not in bounds', () => {
      const plateau = new Plateau(2, 2);

      expect(plateau.isInBounds(-1, 0)).toBe(false);
      expect(plateau.isInBounds(-1, -1)).toBe(false);
      expect(plateau.isInBounds(4, 1)).toBe(false);
      expect(plateau.isInBounds(1, 2)).toBe(false);
    });
  });
});
