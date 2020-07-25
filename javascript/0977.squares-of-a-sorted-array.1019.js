/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    return A.map((item)=>item**2).sort((a,b)=>a-b);
};