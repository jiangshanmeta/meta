/**
 * @param {string} solution
 * @param {string} guess
 * @return {number[]}
 */
var masterMind = function(solution, guess) {
    let success = 0;
    let rest = {
        'R':0,
        'G':0,
        'B':0,
        'Y':0,
    };
    for(let i=0;i<solution.length;i++){
        if(solution[i] === guess[i]){
            success++;
        }else{
            rest[solution[i]]++;
        }
    }
    let fake = 0;
    for(let i=0;i<guess.length;i++){
        if(solution[i] === guess[i]){
            continue;
        }
        if(rest[guess[i]]){
            fake++;
            rest[guess[i]]--;
        }
    }
    return [success,fake];
};