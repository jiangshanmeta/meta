/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

function isNeighbour(str1,str2){
    let flag = false;
    for(let i=0;i<str1.length;i++){
        if(str1[i] !== str2[i]){
            if(flag){
                return false;
            }
            flag = true;
        }
    }
    return true;
}

var ladderLength = function(beginWord, endWord, wordList) {
    const graph = {};
    wordList.push(beginWord);
    for(let i=0;i<wordList.length;i++){
        const edge = graph[wordList[i]] || (graph[wordList[i]] = []);
        for(let j=0;j<i;j++){
            if(isNeighbour(wordList[i],wordList[j])){
                edge.push(wordList[j]);
                graph[wordList[j]].push(wordList[i]);
            }
        }
    }
    if(!graph[endWord]){
        return 0;
    }
    
    let sequence = [beginWord];
    let count = 1;
    const used = {};
    used[beginWord] = true;
    
    while(true){
        const nextSequence = [];
        for(let i=0;i<sequence.length;i++){
            if(sequence[i] === endWord){
                return count;
            }
            for(let j=0;j<graph[sequence[i]].length;j++){
                if(!used[ graph[sequence[i]][j]]){
                    nextSequence.push(graph[sequence[i]][j]);
                    used[graph[sequence[i]][j]] = true;
                }
            }
            
        }
        if(nextSequence.length === 0){
            return 0;
        }
        sequence = nextSequence;
        count++;
    }
    
    
    
    
};