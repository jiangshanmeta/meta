/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    const map = {};
    for(let i=1;i<=n;i++){
        const sum = sumDigit(i);
        if(!map[sum]){
            map[sum] = 0;
        }
        map[sum]++;
    }
    const maxNumber = Math.max(...Object.values(map));

    return Object.values(map).reduce((total,count)=>{
        if(count === maxNumber){
            total++;
        }
        return total;
    },0)
};

function sumDigit(n){
    let result = 0;
    while(n){
        const digit = n%10;
        result += digit;
        n = (n-digit)/10;
    }
    return result;
}