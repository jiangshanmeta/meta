/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
    let result = [];
    let index = 0;
    while(index<S.length){
        const char = S[index++];
        let count = 1;
        while(index<S.length && S[index] === char){
            count++;
            index++;
        }
        result.push(char,count);
    }
    result = result.join('');

    if(result.length<S.length){
        return result;
    }else{
        return S;
    }
};