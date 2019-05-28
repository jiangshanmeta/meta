/**
 * @param {number[]} tokens
 * @param {number} P
 * @return {number}
 */
var bagOfTokensScore = function(tokens, P) {
    tokens.sort((a,b)=>a-b);
    let result = 0;
    let score = 0;
    let low = 0;
    let high = tokens.length-1;
    while(low<=high && (P>=tokens[low] || score>0 )){
        // 用尽可能少的P换尽可能多的score
        while(low<=high && P>=tokens[low]){
            P -= tokens[low++];
            score++;
        }
        result = Math.max(result,score);
        // 用尽可能大的token换取power
        if(low<=high && score>0){
            P += tokens[high--];
            score--;
        }
    }
    return result;
};