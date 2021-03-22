function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
    const oldColor = image[sr][sc];
    const M = image.length;
    if(M === 0){
        return image;
    }
    const N = image[0].length;

    function dfs(x:number,y:number){
        if(x<0 || y<0 || x === M || y === N || image[x][y] !==  oldColor){
            return;
        }
        image[x][y] = newColor;
        dfs(x+1,y);
        dfs(x-1,y);
        dfs(x,y-1);
        dfs(x,y+1);
    }
    oldColor !== newColor && dfs(sr,sc);
    return image;
};

