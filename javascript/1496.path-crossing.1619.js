/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    const map = {
        '0,0':true,
    };
    let x = 0;
    let y = 0;
    for(let i=0;i<path.length;i++){
        switch(path[i]){
            case 'N':
                y++;
                break;
            case 'S':
                y--;
                break;
            case 'E':
                x++;
                break;
            case 'W':
                x--;
                break;
        }
        if(map[`${x},${y}`]){
            return true;
        }
        map[`${x},${y}`] = true;
    }
    return false;
};