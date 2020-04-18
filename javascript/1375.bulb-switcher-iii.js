/**
 * @param {number[]} light
 * @return {number}
 */
var numTimesAllBlue = function(light) {
    // visited[i] 标记第i个灯泡是否被打开
    const visited = new Array(light.length).fill(false);
    let result = 0;
    // count 当前被打开几个灯泡
    let count = 0;
    // index 被打开的灯泡的最大的索引
    let index = -1;
    for(let i=0;i<light.length;i++){
        const lightIndex= light[i]-1;
        index = Math.max(lightIndex,index);
        if(!visited[lightIndex]){
            visited[lightIndex] = true;
            count++;
        }
        if(count === index+1){
            result++;
        }
    }
    return result;
};