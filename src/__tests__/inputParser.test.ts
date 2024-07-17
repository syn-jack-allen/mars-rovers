import { ZodError } from 'zod';
import {
  parseInstructionInput,
  parsePlateauInput,
  parseInitialPositionInput
} from '../inputParser';

describe('input parser', () => {
  describe('parse plateau', () => {
    it('can parse plateau input', () => {
      expect(parsePlateauInput('5 5')).toStrictEqual({ w: 5, h: 5 });
    });

    it('throws if invalid coordinates', () => {
      expect(() => parseInitialPositionInput('0 0')).toThrow(ZodError);
    });
  });

  describe('parse initial position', () => {
    it('can parse initial position input', () => {
      expect(parseInitialPositionInput('5 5 E')).toStrictEqual({
        x: 5,
        y: 5,
        heading: 'E'
      });
    });

    it('throws if invalid coordinates', () => {
      expect(() => parseInitialPositionInput('5 -5 E')).toThrow(ZodError);
    });

    it('throws if invalid heading', () => {
      expect(() => parseInitialPositionInput('5 4 L')).toThrow(ZodError);
    });
  });
  describe('parse instruction', () => {
    it('can parse instruction input', () => {
      expect(parseInstructionInput('MMLR')).toStrictEqual(['M', 'M', 'L', 'R']);
    });

    it('throws if invalid instruction set', () => {
      expect(() => parseInitialPositionInput('MMLD')).toThrow(ZodError);
    });
  });
});
