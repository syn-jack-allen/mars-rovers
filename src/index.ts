import { Controller } from './controller';
import {
  InitialPosition,
  Instruction,
  parseInstructionInput,
  parsePlateauInput,
  parseInitialPositionInput
} from './inputParser';
import { Plateau } from './plateau';

/**
 * A function for executing the Mars Rovers logic given some input strings as specified in the document.
 *
 * The first step is to define the dimensions of the plateau.
 *
 * The next step is to define for each rover:
 *  - the starting coordinates and heading
 *  - the instruction set to follow
 *
 * No rovers can be deployed into the same coordinate space.
 *
 * As many rovers can be deployed as there are spaces on the plateau.
 *
 * @param plateauInput A string containing two numbers separated by a space. For example: '6 8'.
 * @param roverInputs An array of tuples. Each tuple contains:
 *  1) a string indicating the initial orientation of the rover using an x coordinate, y coordinate and a heading, each separated by spaces. For example: '2 3 E'.
 *  2) a string indicating the instruction set for the rover. The instruction set uses the characters L, R or M in the order to be executed with no spaces. For example: 'LMMRM'.
 * @returns The controller instance.
 */
export const execute = (
  plateauInput: string,
  roverInputs: [string, string][]
) => {
  const { w, h } = parsePlateauInput(plateauInput);

  const rovers = roverInputs.map(
    ([roverInitialPositionInput, roverInstructionInput]): [
      InitialPosition,
      Instruction
    ] => [
      parseInitialPositionInput(roverInitialPositionInput),
      parseInstructionInput(roverInstructionInput)
    ]
  );

  // plateau is specified in width and height
  const plateau = new Plateau(w + 1, h + 1);

  const controller = new Controller(plateau);

  // deploy each rover into their initial positions
  rovers.forEach(([initialPosition]) => {
    const { x, y, heading } = initialPosition;
    controller.deployRover(x, y, heading);
  });

  // iterate through each rover sequentially and perform all its instructions
  rovers.forEach(([_, instruction], index) => {
    const rover = controller.getRover(index);

    instruction.forEach((i) => {
      if (i === 'M') rover.move();
      else rover.turn(i);
    });
  });

  return controller;
};
