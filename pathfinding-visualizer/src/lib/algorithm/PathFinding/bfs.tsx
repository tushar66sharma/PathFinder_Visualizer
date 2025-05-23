import { isEqual } from "../../../utils/helpers";
import type { GridType, TileType } from "../../../utils/types";


export const bfs=(grid:GridType, startTile:TileType, endTile:TileType)=>{
    const traversedTiles: TileType[]= [];
    const base =grid[startTile.row][startTile.col];
    base.distance=0;
    base.isTraversed=true;
    const unTraversed=[base]


    while(unTraversed.length){
        const tile=unTraversed.shift()!;
        if(tile.isWall) continue;
        if(tile.distance === Infinity) break;
        tile.isTraversed =true;
        traversedTiles.push(tile);
        if(isEqual(tile,endTile)) break;
    }

}