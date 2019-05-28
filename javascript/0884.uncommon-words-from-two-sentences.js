/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    const arrA = A.split(" ");
    const mapA = {};
    const onceMapA = {};
    for(let i=0;i<arrA.length;i++){
        const letter = arrA[i];
        if(mapA[letter]){
            onceMapA[letter] && delete onceMapA[letter];
        }else{
            onceMapA[letter] = true;
        }
        mapA[letter] = true;
    }
    
    const mapB = {};
    const onceMapB = {};
    const arrB = B.split(" ");
    for(let i=0;i<arrB.length;i++){
        const letter = arrB[i];
        if(mapB[letter]){
            onceMapB[letter] && delete onceMapB[letter];
        }else{
            onceMapB[letter] = true;
        }
        mapB[letter] = true;
    }
    
    const result = [];
    Object.keys(onceMapA).forEach((letter)=>{
        if(mapB[letter] === undefined){
            result.push(letter);
        }
    });
    
    Object.keys(onceMapB).forEach((letter)=>{
        if(mapA[letter] === undefined){
            result.push(letter)
        }
    });
    return result;
};