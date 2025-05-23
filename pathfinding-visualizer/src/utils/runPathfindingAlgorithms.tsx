import { bfs } from "../lib/algorithm/PathFinding/bfs";
import type { AlgorithmType, GridType, TileType } from "./types"


export const runPathfindingAlgorithm=({
    algorithm,
    grid,
    startTile,
    endTile,
}:{
    algorithm: AlgorithmType;
    grid: GridType;
    startTile:TileType;
    endTile:TileType;
})=>{
    switch (algorithm){
        case "BFS":
            return bfs(grid,startTile,endTile);
        default:
            return bfs(grid,startTile,endTile);
    }

};