/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
    const lengthMap = {};
    for(let i=0;i<wall.length;i++){
        let count = 0;
        // 右边缘不算，所以要-1
        for(let j=0;j<wall[i].length-1;j++){
            count += wall[i][j];
            if(lengthMap[count] === undefined){
                lengthMap[count] = 1;
            }else{
                lengthMap[count]++;
            }
        }
    }
    
    const counts = Object.values(lengthMap);

    // 找到出现频率最多的长度
    let max = 0;
    for(let i=0;i<counts.length;i++){
       if(counts[i]>max){
            max = counts[i];   
       }
    }
    return wall.length - max;
};