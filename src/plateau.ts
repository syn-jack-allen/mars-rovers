export class Plateau {
  /**
   * Define a new plateau.
   * @param w The width of the plateau.
   * @param h The height of the plateau.
   */
  constructor(
    public readonly w: number,
    public readonly h: number
  ) {}

  /**
   * For testing if a pair of coordinates are within the bounds of the plateau.
   * @param x The x coordinate to check.
   * @param y The y coordinate to check.
   * @returns True if the coordinates are within the bounds of the plateau.
   */
  isInBounds(x: number, y: number): boolean {
    return x >= 0 && x < this.w && y >= 0 && y < this.h;
  }
}
