import { bfs } from "../lib/algorithm/PathFinding/bfs";
import { dfs } from "../lib/algorithm/PathFinding/dfs";
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
        case "DFS":
            return dfs(grid,startTile,endTile);
        default:
            return bfs(grid,startTile,endTile);
    }

};