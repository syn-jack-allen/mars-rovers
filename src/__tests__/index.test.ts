import { execute } from '..';
import { Controller } from '../controller';
import { Plateau } from '../plateau';

describe('index', () => {
  it('can do test case 1 with input strings', () => {
    const controller = execute('5 5', [
      ['1 2 N', 'LMLMLMLMM'],
      ['3 3 E', 'MMRMMRMRRM']
    ]);

    const roverA = controller.getRover(0);
    expect(roverA.x).toBe(1);
    expect(roverA.y).toBe(3);
    expect(roverA.heading).toBe('N');

    const roverB = controller.getRover(1);
    expect(roverB.x).toBe(5);
    expect(roverB.y).toBe(1);
    expect(roverB.heading).toBe('E');
  });

  it('can do test case 1', () => {
    const controller = new Controller(new Plateau(6, 6));
    const roverA = controller.deployRover(1, 2, 'N');
    roverA.turn('L');
    roverA.move();
    roverA.turn('L');
    roverA.move();
    roverA.turn('L');
    roverA.move();
    roverA.turn('L');
    roverA.move();
    roverA.move();

    expect(roverA.x).toBe(1);
    expect(roverA.y).toBe(3);
    expect(roverA.heading).toBe('N');

    const roverB = controller.deployRover(3, 3, 'E');
    roverB.move();
    roverB.move();
    roverB.turn('R');
    roverB.move();
    roverB.move();
    roverB.turn('R');
    roverB.move();
    roverB.turn('R');
    roverB.turn('R');
    roverB.move();

    expect(roverB.x).toBe(5);
    expect(roverB.y).toBe(1);
    expect(roverB.heading).toBe('E');
  });
});
