import { Rover } from '../rover';

describe('rover', () => {
  it('can be instantiated with a position and heading', () => {
    const rover = new Rover(0, 0, 0, 'N');
    expect(rover.x).toBe(0);
    expect(rover.y).toBe(0);
    expect(rover.heading).toBe('N');
  });

  describe('move', () => {
    it('can move north', () => {
      const rover = new Rover(0, 0, 0, 'N');
      rover.move();
      expect(rover.x).toBe(0);
      expect(rover.y).toBe(1);
      expect(rover.heading).toBe('N');
    });

    it('can move east', () => {
      const rover = new Rover(0, 0, 0, 'E');
      rover.move();
      expect(rover.x).toBe(1);
      expect(rover.y).toBe(0);
      expect(rover.heading).toBe('E');
    });

    it('can move south', () => {
      const rover = new Rover(0, 0, 0, 'S');
      rover.move();
      expect(rover.x).toBe(0);
      expect(rover.y).toBe(-1);
      expect(rover.heading).toBe('S');
    });

    it('can move west', () => {
      const rover = new Rover(0, 0, 0, 'W');
      rover.move();
      expect(rover.x).toBe(-1);
      expect(rover.y).toBe(0);
      expect(rover.heading).toBe('W');
    });
  });

  describe('turn', () => {
    describe('left', () => {
      it('stays in the same position when turning', () => {
        const rover = new Rover(0, 0, 0, 'N');
        rover.turn('L');
        expect(rover.x).toBe(0);
        expect(rover.y).toBe(0);
      });

      it('can turn and face the correct heading', () => {
        const rover = new Rover(0, 0, 0, 'N');
        rover.turn('L');
        expect(rover.heading).toBe('W');
        rover.turn('L');
        expect(rover.heading).toBe('S');
        rover.turn('L');
        expect(rover.heading).toBe('E');
        rover.turn('L');
        expect(rover.heading).toBe('N');
      });
    });
    describe('right', () => {
      it('stays in the same position when turning', () => {
        const rover = new Rover(0, 0, 0, 'N');
        rover.turn('R');
        expect(rover.x).toBe(0);
        expect(rover.y).toBe(0);
      });

      it('can turn and face the correct heading', () => {
        const rover = new Rover(0, 0, 0, 'N');
        rover.turn('R');
        expect(rover.heading).toBe('E');
        rover.turn('R');
        expect(rover.heading).toBe('S');
        rover.turn('R');
        expect(rover.heading).toBe('W');
        rover.turn('R');
        expect(rover.heading).toBe('N');
      });
    });
  });
});
