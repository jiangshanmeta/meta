/**
 * @param {string} num
 * @param {string[]} words
 * @return {string[]}
 */
var getValidT9Words = function(num, words) {
    const map = [
        2,2,2,
        3,3,3,
        4,4,4,
        5,5,5,
        6,6,6,
        7,7,7,7,
        8,8,8,
        9,9,9,9
    ];
    return words.filter((word)=>{
        return word.split('').every((letter,index)=>{
            return map[letter.charCodeAt(0)-97] === +num[index]
        });
    });
};