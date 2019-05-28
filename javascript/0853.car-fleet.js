/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
// 我们按照距离target由近到远的顺序看
// 如果某辆车到达target的时间比前面一辆车大
// 则这辆车不会和前面的车组成fleet fleet数量++
var carFleet = function(target, position, speed) {
    // 排序 按照距离target由近到远
    const sortedPosition = position.map((pos,index)=>{
        return {
            pos,
            index,
        };
    }).sort((a,b)=>{
        return b.pos-a.pos;
    });
    
    let count = 0;
    let lastTime = -Infinity;
    for(let i=0;i<sortedPosition.length;i++){
        const index = sortedPosition[i].index;
        const time = (target-sortedPosition[i].pos)/speed[index];
        if(time>lastTime ){
            lastTime = time;
            count++;
        }
    }
    
    return count;
};