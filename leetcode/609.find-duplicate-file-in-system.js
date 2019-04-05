/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
    // 基本的hash
    const contentMap = {};
    const result = [];
    for(let i=0;i<paths.length;i++){
        const sub = paths[i].split(" ");
        const root = sub[0];
        for(let j=1;j<sub.length;j++){
            const leftBracket = sub[j].indexOf('(');
            const fileName = sub[j].substring(0,leftBracket);
            const content = sub[j].substring(leftBracket+1,sub[j].length-1);
            (contentMap[content] || (contentMap[content] = [])).push(`${root}/${fileName}`);
            
            contentMap[content].length === 2 && result.push(contentMap[content]);
        }
    }
    return result;
};