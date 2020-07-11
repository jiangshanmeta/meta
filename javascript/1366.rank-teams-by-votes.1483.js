/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function(votes) {
    const amount = votes[0].length;
    const countMap = {}
    for(let s of votes[0]){
        countMap[s] = new Array(amount).fill(0);
    }
    for(let vote of votes){
        for(let j=0;j<amount;j++){
            countMap[vote[j]][j]++;
        }
    }
    
    return votes[0].split('').map((char)=>{
        return {
            char,
            amount:countMap[char],
        }
    }).sort((a,b)=>{
        const aCounts = a.amount;
        const bCounts = b.amount;
        for(let i=0;i<amount;i++){
            if(aCounts[i]>bCounts[i]){
                return -1;
            }else if(aCounts[i]<bCounts[i]){
                return 1;
            }
        }
        return a.char<b.char?-1:1;
    }).map(item=>item.char).join('');    
};