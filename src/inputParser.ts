import { z } from 'zod';
import { compass, direction } from './common';

const plateauSchema = z
  .tuple([
    z.coerce.number().int().positive(),
    z.coerce.number().int().positive()
  ])
  .transform(([w, h]) => ({ w, h }));

const initialPositionSchema = z
  .tuple([
    z.coerce.number().int().nonnegative(),
    z.coerce.number().int().nonnegative(),
    z.enum(compass)
  ])
  .transform(([x, y, heading]) => ({ x, y, heading }));

export type InitialPosition = z.infer<typeof initialPositionSchema>;

const instructionSchema = z.array(z.enum([...direction, 'M']));

export type Instruction = z.infer<typeof instructionSchema>;

export const parsePlateauInput = (input: string) => {
  return plateauSchema.parse(input.split(' '));
};

export const parseInitialPositionInput = (input: string) => {
  return initialPositionSchema.parse(input.split(' '));
};

export const parseInstructionInput = (input: string) => {
  return instructionSchema.parse(input.split(''));
};
