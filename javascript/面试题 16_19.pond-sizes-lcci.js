/**
 * @param {number[][]} land
 * @return {number[]}
 */
var pondSizes = function(land) {
    const result = [];
    for(let i=0;i<land.length;i++){
        for(let j=0;j<land[0].length;j++){
            if(land[i][j] === 0){
                result.push( dfs(i,j,land) );
            }
        }
    }
    
    return result.sort((a,b)=>a-b);
};

function dfs(x,y,land){
    if(x<0 || y<0 || x>=land.length || y>=land[0].length || land[x][y] !== 0){
        return 0;
    }
    land[x][y] = 1;
    let result = 1;
    for(let i=-1;i<=1;i++){
        for(let j=-1;j<=1;j++){
            result += dfs(x+i,y+j,land);
        }
    }
    return result;
}