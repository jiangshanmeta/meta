/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    // 统计出现的次数
    const countBy = deck.reduce((obj,num)=>{
        if(obj[num] === undefined){
            obj[num] = 1;
        }else{
            obj[num]++;
        }
        return obj;
    },Object.create(null));
    // 求出现次数的最大公约数
    const nums = Object.values(countBy);
    let num = nums[0];
    for(let i=1;i<nums.length;i++){
        num = gcd(num,nums[i]);
    }
    return num>1;
};
// 求最大公约数
function gcd(m,n){
    if(m<n){
        let tmp = m;
        m = n;
        n = tmp;
    }
    if(n === 0){
        return m;
    }
    return gcd(n,m%n);
}