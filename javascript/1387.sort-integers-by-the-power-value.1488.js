/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
    const map = {};
    const list = [];
    for(let i=lo;i<=hi;i++){
        list.push(i);
        map[i] = countPower(i);
    }
    list.sort((a,b)=>{
        if(map[a] !== map[b]){
            return map[a]-map[b];
        }
        return a-b;
    })
    
    
    return list[k-1];
};

const cache = {
    1:0,
}
function countPower(n){
    if(cache[n] === undefined){
        if(n&1){
            cache[n] = countPower(3*n+1)+1;
        }else{
            cache[n] = countPower(n>>>1)+1;
        }
    }
    return cache[n];
}