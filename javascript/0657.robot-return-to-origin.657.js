/**
 * @param {string} moves
 * @return {boolean}
 */
// 无脑算就好了
var judgeCircle = function (moves) {
    let x = 0; let y = 0;
    for (let i = 0; i < moves.length; i++) {
        switch (moves[i]) {
        case 'R':
            x++;
            break;
        case 'L':
            x--;
            break;
        case 'U':
            y++;
            break;
        case 'D':
            y--;
            break;
        default:
            break;
        }
    }

    return x === 0 && y === 0;
};
