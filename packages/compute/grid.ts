export type Color = number;

export type Grid = {
  width: number;
  height: number;
  data: Uint8Array;
};

export const getIndex = (grid: Grid, x: number, y: number) =>
  x * grid.height + y;

export const isInside = (grid: Grid, x: number, y: number) =>
  x >= 0 && y >= 0 && x < grid.width && y < grid.height;

export const isInsideLarge = (grid: Grid, m: number, x: number, y: number) =>
  x >= -m && y >= -m && x < grid.width + m && y < grid.height + m;

export const getColor = (grid: Grid, x: number, y: number) =>
  grid.data[getIndex(grid, x, y)];

export const copyGrid = ({ width, height, data }: Grid) => ({
  width,
  height,
  data: Uint8Array.from(data),
});

export const setColor = (
  grid: Grid,
  x: number,
  y: number,
  color: Color | null
) => {
  grid.data[getIndex(grid, x, y)] = color || 0;
};

export const createEmptyGrid = (width: number, height: number) => ({
  width,
  height,
  data: new Uint8Array(width * height),
});
