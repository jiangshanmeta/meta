/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    const charsCount = new Array(26).fill(0);
    for(let i=0;i<chars.length;i++){
        charsCount[chars.charCodeAt(i)-97]++;
    }
    let result = 0;
    for(let i=0;i<words.length;i++){
        // 统计每个单词中每个字符出现的次数
        const word = words[i];
        const wordCount = new Array(26).fill(0);
        let flag = true;
        for(let j=0;j<word.length;j++){
            const code = word.charCodeAt(j)-97;
            wordCount[code]++;
            if(wordCount[code]>charsCount[code]){
                flag = false;
                break;
            }
        }
        if(flag){
            result += word.length;
        }
    }
    return result;
};