/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let result = 0;
    for(let i=0;i<items.length;i++){
        if(ruleKey === 'type'){
            if(ruleValue === items[i][0]){
                result++;
            }
        }else if(ruleKey === 'color'){
            if(ruleValue === items[i][1]){
                result++;
            }
        }else{
            if(ruleValue === items[i][2]){
                result++;
            }
        }
    }
    return result;
};