/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
var game = function(guess, answer) {
    let result = 0;
    for(let i=0;i<guess.length;i++){
        if(guess[i] === answer[i]){
            result++;
        }
    }
    return result;
};