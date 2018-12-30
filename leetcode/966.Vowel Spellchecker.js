/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
//  hash
var spellchecker = function(wordlist, queries) {
    // 利用hash 存储可能的值
    const exactMap = {};
    const lowercaseMap = {};
    const regMap = {};
    for(let i=0;i<wordlist.length;i++){
        exactMap[wordlist[i]] = true;
        const lc = wordlist[i].toLowerCase();
        if(lowercaseMap[lc] === undefined){
           lowercaseMap[lc] = wordlist[i]; 
        }
        // 元音的统一处理成数字1
        const replace = lc.replace(/[aeiou]/g,"1");
        if(regMap[replace] === undefined){
            regMap[replace] = wordlist[i];
        }
    }
    const vowels = ["a","e","i","o","u"];
    return queries.map((query)=>{
        // 按照规则，先看完全一样的，然后看大小写不敏感的，最后看元音替换的
        if(exactMap[query]){
            return query;
        }
        const lc = query.toLowerCase();
        if(lowercaseMap[lc] !== undefined){
            return lowercaseMap[lc];
        }
        const replace = lc.replace(/[aeiou]/g,"1");
        if(regMap[replace] !== undefined){
            return regMap[replace];
        }
        return "";
    });
};