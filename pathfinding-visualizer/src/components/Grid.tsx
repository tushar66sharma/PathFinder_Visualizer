import { twMerge } from "tailwind-merge";
import { usePathfinding } from "../hooks/usePathfinding";
import { MAX_COLS, MAX_ROWS } from "../utils/constants";
import type { TileType } from "../utils/types";
import { Tile } from "./Tile";
import { useState, type MutableRefObject } from "react";
import { checkIfStartOrEnd, createNewGrid } from "../utils/helpers";

export function Grid({isVisualizationRunningRef}:{isVisualizationRunningRef:MutableRefObject<boolean>}) {
  const { grid,setGrid } = usePathfinding();
  const [isMouseDown, setisMouseDown]= useState(false);

  const handleMouseDown = (row:number ,col:number)=>{
    if(isVisualizationRunningRef.current || checkIfStartOrEnd(row,col)){
        return;
    }

    setisMouseDown(true);
    const newGrid =createNewGrid(grid,row,col);
    setGrid(newGrid);
  }

  const handleMouseUp = (row:number ,col:number)=>{
    if(isVisualizationRunningRef.current || checkIfStartOrEnd(row,col)){
        return;
    }

    setisMouseDown(false);
    
  }


  const handleMouseEnter = (row:number ,col:number)=>{
    if(isVisualizationRunningRef.current || checkIfStartOrEnd(row,col)){
        return;
    }


    if(isMouseDown){
        const newGrid=createNewGrid(grid,row,col);
        setGrid(newGrid);
    }
    
  }
  

  return (
    <div
      className={twMerge(
        //base class
        "flex items-center flex-col justify-center border-sky-400 mt-10",
        //Control Grid height
        `lg:min-h-[${MAX_ROWS * 17}px] 
            md:min-h-[${MAX_ROWS * 15}px]
            xs:min-h-[${MAX_ROWS * 8}px]
            min-h-[${MAX_ROWS * 7}px]`,
        //Controlling Grid Width
        `lg:w-[${MAX_COLS * 17}px] 
            md:w-[${MAX_COLS * 15}px]
            xs:w-[${MAX_COLS * 8}px]
            w-[${MAX_COLS * 7}px]`
      )}
    >
    {grid.map((r:TileType[],rowIndex:number)=>(
        <div key={rowIndex} className="flex">
            {r.map((tile:TileType,tileIndex:number)=>{
                const {row,col,isEnd,isStart,isPath,isTraversed,isWall}=tile;
                return(
                    <Tile
                        key={tileIndex}
                        row={tile.row}
                        col={tile.col}
                        isEnd={isEnd}
                        isStart={isStart}
                        isPath={isPath}
                        isTraversed={isTraversed}
                        isWall={isWall}
                        handleMouseDown={()=> handleMouseDown(row,col)}
                        handleMouseUp={()=>handleMouseUp(row,col)}
                        handleMouseEnter={()=> handleMouseEnter(row,col)}
                    />
                )
            })}
        </div>
    ))}
    </div>
  );
}
