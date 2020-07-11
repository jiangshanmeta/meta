/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const arr = Array.apply(null,{length:n}).map(()=>new Array(n));
    
    let top = 0;
    let right = n;
    let bottom = n;
    let left = 0;
    let direction = 0;
    
    let count = 0;
    
    while(left<right && top<bottom){
        if(direction === 0){
            for(let i=left;i<right;i++){
                arr[top][i] = ++count;
            }
            top++;
        }else if(direction === 1){
            right--;
            for(let i=top;i<bottom;i++){
                arr[i][right] = ++count;
            }
        }else if(direction === 2){
            bottom--;
            for(let i=right-1;i>=left;i--){
                arr[bottom][i] = ++count;
            }
        }else{
            for(let i=bottom-1;i>=top;i--){
                arr[i][left] = ++count;
            }
            left++;
        }
        direction = (direction+1)%4;
    }
    return arr;
};