/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(magazine.length<ransomNote.length){
        return false;
    }
    
    const arr = new Array(26).fill(0);
    for(let i=0;i<magazine.length;i++){
        arr[magazine.charCodeAt(i)-97]++;
    }
    for(let i=0;i<ransomNote.length;i++){
        const code = ransomNote.charCodeAt(i)-97
        arr[code]--;
        if(arr[code]<0){
            return false;
        }
    }
    

    return true;
};