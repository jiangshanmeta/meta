/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
const dx = [0,1,0,-1];
const dy = [1,0,-1,0];
// 就是暴力算
var robotSim = function(commands, obstacles) {
    const map = {};
    for(let i=0;i<obstacles.length;i++){
        if(map[obstacles[i][0]] === undefined){
            map[obstacles[i][0]] = {[obstacles[i][1]]:true};
        }else{
            map[obstacles[i][0]][obstacles[i][1]] = true;
        }
    }
    let direction = 0;
    let x = 0;
    let y = 0;
    let max = 0;
    for(let i=0;i<commands.length;i++){
        const command = commands[i];
        if(command === -1){
            direction = (direction+1)%4;
        }else if(command === -2){
            direction--;
            if(direction === -1){
                direction = 3;
            }
        }else{
            for(let j=0;j<command;j++){
                let nextX = x + dx[direction];
                let nextY = y + dy[direction];
                
                if(map[nextX] && map[nextX][nextY]){
                    break;
                }
                x = nextX;
                y = nextY;
                max = Math.max(max,x**2 + y**2)
            }
        }
    }
    
    return max;
};