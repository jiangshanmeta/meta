/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
    const result = s.split('');
    // 并查集
    // 能够交换的构成一个集合
    const unionFindGroup = new Array(s.length);
    for(let i=0;i<s.length;i++){
        unionFindGroup[i] = i;
    }
    for(let i=0;i<pairs.length;i++){
        let parent1 = unionFindGroup[pairs[i][0]];
        let parent2 = unionFindGroup[pairs[i][1]];
        while(unionFindGroup[parent1] !== parent1){
            parent1 = unionFindGroup[parent1];
        }
        while(unionFindGroup[parent2] !== parent2){
            parent2 = unionFindGroup[parent2];
        }
        
        const target = Math.min(parent1,parent2);
        unionFindGroup[pairs[i][0]] = target;
        unionFindGroup[pairs[i][1]] = target;
        unionFindGroup[parent1] = target;
        unionFindGroup[parent2] = target;
    }
    for(let i=0;i<s.length;i++){
        while(unionFindGroup[unionFindGroup[i]] !== unionFindGroup[i]){
            unionFindGroup[i] = unionFindGroup[unionFindGroup[i]];
        }
    }
    // 按所属集合聚合
    const group = {};
    for(let i=0;i<s.length;i++){
        (group[unionFindGroup[i]] || (group[unionFindGroup[i]] = [])).push(i);
    }
    Object.values(group).forEach((indexs)=>{
        // 集合内部可以任意排列
        const sub = indexs.map(index=>s[index]);
        sub.sort();
        let subIndex = 0;
        indexs.forEach((index)=>{
            result[index] = sub[subIndex++];
        });
    });
    return result.join('');
};