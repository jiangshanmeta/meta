/**
 * @param {string[]} words
 * @return {number}
 */

const list = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

var uniqueMorseRepresentations = function(words) {
    const map = {};
    for(let i=0;i<words.length;i++){
        const word = words[i];
        let encode = '';
        for(let j=0;j<word.length;j++){
            encode += list[word.charCodeAt(j)-97];
        }
        map[encode] = true;
    }
    
    return Object.keys(map).length;
};