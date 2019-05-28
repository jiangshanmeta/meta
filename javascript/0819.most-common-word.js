/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const arr = paragraph.trim().toLowerCase().replace(/[^a-zA-Z ]/g," ").replace(/\s+/g," ").split(" ");
    const bannedMap = {};
    for(i=0;i<banned.length;i++){
        bannedMap[banned[i]] = true;
    }
    
    const map = {};
    let maxCount = 0;
    let maxVal;
    for(let i=0;i<arr.length;i++){
        const word = arr[i];
        if(bannedMap[word]){
            continue;   
        }
        if(map[word] === undefined){
            map[word] = 1;
        }else{
            map[word]++;
        }
        if(map[word]>maxCount){
            maxCount = map[word];
            maxVal = word;
        }
    }
    return maxVal;
};