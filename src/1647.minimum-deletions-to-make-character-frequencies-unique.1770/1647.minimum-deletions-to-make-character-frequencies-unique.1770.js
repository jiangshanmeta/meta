/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    const freq = new Array(26).fill(0);
    for(let i=0;i<s.length;i++){
        freq[s.charCodeAt(i)-97]++;
    }
    const maxCount = Math.max(...freq);
    const counts = new Array(maxCount+1).fill(0);
    for(let i=0;i<26;i++){
        counts[freq[i]]++;
    }

    let result = 0;
    let index1 = maxCount;
    let index2 = maxCount;
    while(index1>0){
        if(counts[index1]<2){
            index1--;
            continue;
        }
        if(index2>=index1){
            index2 = index1-1;
        }
        while(index2>0 && counts[index2] !== 0){
            index2--;
        }

        counts[index2]++;
        counts[index1]--;
        result += index1-index2;
    }

    return result;
};