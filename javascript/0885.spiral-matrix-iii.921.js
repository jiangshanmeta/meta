/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var spiralMatrixIII = function(R, C, r0, c0) {
    let right = c0 + 1;
    let bottom = r0+1;
    let top = r0;
    let left = c0-1;
    
    let direction = 0;
    let x = r0;
    let y = c0;
    
    let rst = [[r0,c0]];
    while(top>-1 || right<C || bottom<R || left>-1){
        if(direction === 0){
            if(top>-1){
                x = top;
                y = Math.max(left+2,0);
                const maxPosition = Math.min(right,C-1) + 1;
                while(y<maxPosition){
                    rst.push([x,y++]);
                }
            }
            top--;
        }else if(direction === 1){
            if(right<C){
                y = right;
                x = Math.max(top+2,0);
                const maxPosition = Math.min(bottom,R-1) + 1;
                while(x<maxPosition){
                    rst.push([x++,y]);
                }
            }
            right++;
        }else if(direction === 2){
            if(bottom<R){
                x = bottom;
                y = Math.min(right-2,C-1);
                const minPosition = Math.max(left,0)-1;
                while(y>minPosition){
                    rst.push([x,y--]);
                }
            }

            bottom++;
        }else{
            if(left>-1){
                y = left;
                x = Math.min(bottom-2,R-1);
                const minPosition = Math.max(top,0)-1;
                while(x>minPosition){
                    rst.push([x--,y]);
                }
            }

            left--;
        }
        direction = (direction+1)%4;
    }
    
    return rst;
};