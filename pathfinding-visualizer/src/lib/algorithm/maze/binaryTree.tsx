import { MAX_COLS, MAX_ROWS } from "../../../utils/constants";
import { createWall } from "../../../utils/createWall";
import { destroyWall } from "../../../utils/destroyWall";
import { getRandInt, isEqual, sleep } from "../../../utils/helpers";
import type { GridType, SpeedType, TileType } from "../../../utils/types";

export const binaryTree = async (
  grid: GridType,
  startTile: TileType,
  endTile: TileType,
  setIsDisabled: (isDisabled: boolean) => void,
  speed: SpeedType
) => {
  createWall(startTile, endTile, speed);
  await sleep(MAX_ROWS * MAX_COLS);

  for (const row of grid) {
    for (const node of row) {
      if (node.row % 2 === 0 || node.col % 2 === 0) {
        if (!isEqual(node, startTile) && !isEqual(node, endTile)) {
          node.isWall = true;
        }
      }
    }
  }

  for (let row = 1; row < MAX_ROWS; row += 2) {
    for (let col = 1; col < MAX_COLS; col += 2) {
      if (row === MAX_ROWS - 2 && col === MAX_COLS - 2) {
        continue;
      } else if (row === MAX_ROWS - 2) {
        await destroyWall(grid, row, col, 1, speed);
      } else if ((col === MAX_COLS - 2)) {
        await destroyWall(grid, row, col, 0, speed);
      } else {
        await destroyWall(grid, row, col, getRandInt(0, 2), speed);
      }
    }
  }
  setIsDisabled(false);
};
