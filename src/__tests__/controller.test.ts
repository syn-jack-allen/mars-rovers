import { Controller } from '../controller';
import { Plateau } from '../plateau';

describe('controller', () => {
  describe('deploy rover', () => {
    it('throws if a rover is deployed out of bounds', () => {
      const controller = new Controller(new Plateau(2, 2));
      expect(() => controller.deployRover(2, 2, 'N')).toThrow(
        'Rover has been deployed out of bounds!'
      );
    });

    it('throws if a rover is deployed on top of another rover', () => {
      const controller = new Controller(new Plateau(2, 2));
      controller.deployRover(1, 1, 'N');
      expect(() => controller.deployRover(1, 1, 'N')).toThrow(
        'Rover was deployed on top of another rover!'
      );
    });

    it('uses sequential IDs for deployed rovers', () => {
      const controller = new Controller(new Plateau(2, 2));
      const a = controller.deployRover(1, 1, 'N');
      const b = controller.deployRover(1, 0, 'N');
      expect(a.id).toBe(0);
      expect(b.id).toBe(1);
    });
  });

  describe('get rover', () => {
    it('can get a rover by its ID', () => {
      const controller = new Controller(new Plateau(2, 2));
      const rover = controller.deployRover(1, 1, 'N');
      expect(rover).toBeDefined();
      expect(rover.x).toBe(1);
      expect(rover.y).toBe(1);
      expect(rover.heading).toBe('N');
    });

    it('throws if no rover with that ID exists', () => {
      const controller = new Controller(new Plateau(2, 2));
      expect(() => controller.getRover(10)).toThrow(
        'No rover exists with that ID!'
      );
    });
  });
});
