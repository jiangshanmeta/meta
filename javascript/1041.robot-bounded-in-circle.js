/**
 * @param {string} instructions
 * @return {boolean}
 */
// 走一遍 如果最终在原点或者方向改变了的 满足
var isRobotBounded = function(instructions) {
    let direction = 0;
    let x = 0;
    let y = 0;
    for(let i=0;i<instructions.length;i++){
        if(instructions[i] === 'G'){
            if(direction === 0){
                y++;
            }else if(direction === 1){
                x--;
            }else if(direction === 2){
                y--;
            }else if(direction === 3){
                x++;
            }
        }else if(instructions[i] === 'L'){
            direction++;
            direction %= 4;
        }else{
            direction--;
            if(direction === -1){
                direction = 3;
            }
        }
    }
    if( (x===0 && y===0) || direction>0){
        return true;
    }
    return false;
};