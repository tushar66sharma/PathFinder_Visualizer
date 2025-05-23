import { MAX_COLS, MAX_ROWS } from "./constants";
import type { GridType, TileType } from "./types"


export const getUntraversedNeighbour=(grid:GridType ,tile:TileType)=>{
    const {row,col}=tile;
    const neighbour=[];

    if(row>0){
        neighbour.push(grid[row-1][col]);
    }

    if(row<MAX_ROWS-1){
        neighbour.push(grid[row+1][col]);
    }
    if(col>0){
        neighbour.push(grid[row][col-1]);
    }
    if(col<MAX_COLS-1){
        neighbour.push(grid[row][col+1]);
    }

    return neighbour.filter((neighbour)=>!neighbour.isTraversed);

}