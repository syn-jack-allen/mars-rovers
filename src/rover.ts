import { compass, Heading, Direction } from './common';

export class Rover {
  constructor(
    public readonly id: number,
    private _x: number,
    private _y: number,
    private _heading: Heading
  ) {}

  /**
   * Move the rover one place in the heading it is currently facing.
   */
  move() {
    switch (this._heading) {
      case 'N':
        this._y += 1;
        break;
      case 'E':
        this._x += 1;
        break;
      case 'S':
        this._y -= 1;
        break;
      case 'W':
        this._x -= 1;
        break;
    }
  }

  /**
   * Turn the rover 90-degrees in place.
   * @param direction The direction to turn in.
   */
  turn(direction: Direction) {
    if (direction === 'L')
      this._heading = compass[(compass.indexOf(this._heading) + 3) % 4];
    if (direction === 'R')
      this._heading = compass[(compass.indexOf(this._heading) + 1) % 4];
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  get heading() {
    return this._heading;
  }
}
