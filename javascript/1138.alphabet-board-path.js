/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function(target) {
    const xIndexs = [
        0,0,0,0,0,
        1,1,1,1,1,
        2,2,2,2,2,
        3,3,3,3,3,
        4,4,4,4,4,
        5,
    ];
    const yIndexs = [
        0,1,2,3,4,
        0,1,2,3,4,
        0,1,2,3,4,
        0,1,2,3,4,
        0,1,2,3,4,
        0,
    ];
    const result = [];
    let curX = 0;
    let curY = 0;
    for(let i=0;i<target.length;i++){
        const code = target.charCodeAt(i)-97;
        const targetX = xIndexs[code];
        const targetY = yIndexs[code];
        if(curX !== targetX || curY !== targetY){
            // z特殊处理
            if(curX === 5 && targetX !== 5){
                result.push('U'.repeat(curX-targetX));
                curX = targetX;
            }
            if(targetX === 5 && curX !== 5){
                result.push('L'.repeat(curY-targetY));
                curY = targetY;
            }
            // 其余的随便走就行
            if(targetX>curX){
                result.push('D'.repeat(targetX-curX));
            }else if(targetX<curX){
                result.push('U'.repeat(curX-targetX));
            }
            if(targetY>curY){
                result.push('R'.repeat(targetY-curY));
            }else if(targetY<curY){
                result.push('L'.repeat(curY-targetY));
            }
            curX = targetX;
            curY = targetY;
        }
        result.push('!');
    }
    
    return result.join("");
};