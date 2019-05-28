/**
 * @param {string} S
 * @return {number}
 */
const mod = 10**9 + 7;
var distinctSubseqII = function(S) {
    const duplicate = {};
    const arr = new Array(S.length).fill(0);
    arr[S.length-1] = 1;
    duplicate[S[S.length-1]] = 1;
    let right = 1;
    // 思路是这样的，从后向前，长度逐渐+1
    // 以当前节点S[i]为开始的序列为1(只用当前元素)+right(右面的全部组合每一个以S[i]为前缀构成新组合)
    for(let i=S.length-2;i>-1;i--){
        let cur = 1 + right;
        // 比较复杂的是重复元素的处理
        // 比如aaa 从a=>aa 我们得到['a','aa']但是'a'是重复的，所以减去1
        // 从aa=>aaa 得到['a','aa','aaa'] 'a'和'aa'是重复的，要减去2
        if(duplicate[S[i]] !== undefined){
            cur -= duplicate[S[i]];
        }
        arr[i] = cur;
        if(duplicate[S[i]] === undefined){
            duplicate[S[i]] = cur;
        }else{
            duplicate[S[i]] += cur;
        }
        right += cur%mod;
    }
    return arr.reduce((sum,cur)=>{
        sum += cur;
        return sum;
    },0)%mod;
};