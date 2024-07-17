import { Heading } from './common';
import { Plateau } from './plateau';
import { Rover } from './rover';

export class Controller {
  private rovers: Rover[] = [];

  constructor(public readonly plateau: Plateau) {}

  /**
   * Deploys a rover to the Martian plane!
   * @param x The initial zero-indexed x coordinate of the rover.
   * @param y The initial zero-indexed y coordinate of the rover.
   * @param heading The initial heading of the rover.
   * @returns The id of the rover.
   * @throws If the rover was deployed out of bounds or on top of another rover.
   */
  deployRover(x: number, y: number, heading: Heading): Rover {
    if (!this.plateau.isInBounds(x, y))
      throw new Error('Rover has been deployed out of bounds!');
    if (this.rovers.find((rover) => rover.x === x && rover.y === y))
      throw new Error('Rover was deployed on top of another rover!');

    const rover = new Rover(this.rovers.length, x, y, heading);

    this.rovers.push(rover);
    return rover;
  }

  /**
   * Get a deployed rover by its ID.
   * @param id The ID of the rover.
   * @returns The rover.
   */
  getRover(id: number): Rover {
    const rover = this.rovers[id];
    if (!rover) throw new Error('No rover exists with that ID!');
    return rover;
  }
}
