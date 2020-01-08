/**
 * @param {number} m
 * @param {number} n
 * @param {number} N
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
const directions = [
    [1,0],
    [-1,0],
    [0,1],
    [0,-1]
];
const mod = 10**9+7

var findPaths = function(m, n, N, i, j) {
    let result = 0;
    let grid = new Array(m);
    for(let i1=0;i1<m;i1++){
        grid[i1] = new Array(n).fill(0);
    }
    grid[i][j] = 1;
    while(N>0){
        const nextGrid = new Array(m);
        for(let i=0;i<m;i++){
            nextGrid[i] = new Array(n).fill(0);
        }
        for(let i=0;i<m;i++){
            for(let j=0;j<n;j++){
                if(grid[i][j] === 0){
                    continue;
                }
                for(let k=0;k<4;k++){
                    const [deltaX,deltaY] = directions[k];
                    const newX = i+deltaX;
                    const newY = j+deltaY;
                    if(newX<0 || newY<0 || newX === m || newY === n){
                        result = (result+grid[i][j])%mod;
                    }else{
                        nextGrid[newX][newY] = (nextGrid[newX][newY]+grid[i][j])%mod;
                    }
                }
                
            }
        }
        grid = nextGrid;
        
        N--;
    }
    return result;
};