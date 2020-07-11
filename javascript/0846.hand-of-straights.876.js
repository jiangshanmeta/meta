/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
var isNStraightHand = function(hand, W) {
    const set = [];
    const map = {};
    for(let i=0;i<hand.length;i++){
        if(map[hand[i]]===undefined){
            set.push(hand[i]);
            map[hand[i]] = 1;
        }else{
            map[hand[i]]++;
        }
    }
    set.sort((a,b)=>a-b);

    for(let i=0;i<set.length;i++){
        const curVal = set[i];
        const curCount = map[curVal];
        if(curCount === 0){
            continue;
        }
        
        // 向后查找看够不够用
        for(let j=1;j<W;j++){
            const nextCount = map[curVal+j]
            if(nextCount === undefined || nextCount <curCount){
                return false;
            }
            map[curVal+j] -= curCount;
        }
    }
    return true;
};