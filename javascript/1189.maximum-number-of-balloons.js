/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    // countBy
    const countMap = {
        b:0,
        a:0,
        l:0,
        o:0,
        n:0,
    };
    for(let i=0;i<text.length;i++){
        countMap[text[i]] !== undefined && countMap[text[i]]++;
    }
    return Math.min(countMap.b,countMap.a,Math.floor(countMap.l/2),Math.floor(countMap.o/2),countMap.n);
};