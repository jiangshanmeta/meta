/**
 * @param {number[]} nums
 * @return {number}
 */
// 这题竟然是用前缀树解
var findMaximumXOR = function(nums) {
    const maxLength = Math.max(...nums).toString(2).length;
    const trie = [];
    for(let i=0;i<nums.length;i++){
        const str = nums[i].toString(2).padStart(maxLength,'0');
        let prev = trie;
        for(let j=0;j<str.length;j++){
            prev = prev[str[j]] || (prev[str[j]] = new Array(2));
        }
    }
    return dfs(trie,trie,0,0,maxLength);
};

function dfs(trie1,trie2,current,depth,maxDepth){
    if(!trie1 || !trie2){
        return 0;
    }
    
    if(depth === maxDepth){
        return current;
    }
    depth++;
    current *= 2;
    // xor 意味着一个为1 一个为0 才能最大
    const onezero = Math.max(dfs(trie1[0],trie2[1],current+1,depth,maxDepth),dfs(trie1[1],trie2[0],current+1,depth,maxDepth));
    if(onezero !== 0){
        return onezero;
    }
    // 不能一个为1 一个为0 即全为1或者全为0
    return Math.max(dfs(trie1[0],trie2[0],current,depth,maxDepth),dfs(trie1[1],trie2[1],current,depth,maxDepth));
}