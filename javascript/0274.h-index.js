/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    if(citations.length === 0){
        return 0;
    }
    const countByIF = {};
    const IFS = [];
    for(let i=0;i<citations.length;i++){
        const IF = citations[i];
        if(countByIF[IF] === undefined){
            IFS.push(IF);
            countByIF[IF] = 0;
        }
        countByIF[IF]++;
    }
    IFS.sort((a,b)=>b-a);
    
    let paperCount = countByIF[IFS[0]];
    let HIndex = Math.min(IFS[0],paperCount);
    
    
    for(let i=1;i<IFS.length;i++){
        const IF = IFS[i];
        if(IF<HIndex){
            return HIndex;
        }
        
        HIndex = Math.min(IF,paperCount+countByIF[IF]);
        paperCount += countByIF[IF];
    }
    
    return HIndex
};