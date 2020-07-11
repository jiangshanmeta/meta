/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    // 保证 start<=destination 
    if(destination<start){
        const tmp = start;
        start = destination;
        destination = tmp;
    }
    let total = 0;
    let between = 0;
    for(let i=0;i<distance.length;i++){
        total += distance[i];
        if(i>=start && i<destination){
            between += distance[i]
        }
    }
    // 两个方向走 找最短的距离
    return Math.min(between,total-between)
};