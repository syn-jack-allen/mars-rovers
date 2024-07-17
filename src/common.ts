export const compass = ['N', 'E', 'S', 'W'] as const;

export type Heading = (typeof compass)[number];

export const direction = ['L', 'R'] as const;

export type Direction = (typeof direction)[number];
