/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
//  DFS
var floodFill = function(image, sr, sc, newColor) {
    const color = image[sr][sc];
    if(color === newColor){
        return image;
    }
    
    const maxX = image.length-1;
    const maxY = image[0].length-1;
    
    function dfs(image,x,y){
        image[x][y] = newColor;
        if(x>0 && image[x-1][y] === color){
            dfs(image,x-1,y);
        }
        
        if(y<maxY && image[x][y+1] === color){
            dfs(image,x,y+1);
        }
        
        if(x<maxX && image[x+1][y] === color){
            dfs(image,x+1,y);
        }
        
        if(y>0 && image[x][y-1] === color){
            dfs(image,x,y-1);
        }
    }
    
    dfs(image,sr,sc);
    return image;
};