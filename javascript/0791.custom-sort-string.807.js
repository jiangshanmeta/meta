/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
    // map用来统计在T中每个需要按照S排序规则的排列的字母的个数
    const map = {};
    for(let i=0;i<S.length;i++){
        map[S[i]] = 0
    }
    
    let sorted = '';
    // 不在S中的可以随便排 所以统一放前面
    for(let i=0;i<T.length;i++){
        if(map[T[i]] === undefined){
            sorted += T[i];
        }else{
            map[T[i]]++;
        }
    }
    // 在S中的要按照S的顺序拍
    for(let i=0;i<S.length;i++){
        for(let j=0;j<map[S[i]];j++){
            sorted += S[i];
        }
    }
    
    return sorted;
};