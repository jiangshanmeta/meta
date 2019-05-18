/**
 * @param {string} S
 * @return {string}
 */
var maskPII = function(S) {
    const atIndex = S.indexOf('@');
    if(atIndex>-1){
        return `${S[0].toLowerCase()}*****${S[atIndex-1].toLowerCase()}${S.slice(atIndex).toLowerCase()}`;   
    }
    const digitStr = S.replace(/[^0-9]/g,"");

    return `${digitStr.length>10?'+'+ '*'.repeat(digitStr.length-10) +'-':''}***-***-${digitStr.slice(-4)}`;
};