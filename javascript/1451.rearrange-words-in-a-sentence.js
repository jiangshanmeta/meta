/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
    const lengths = [];
    const list = text.split(' ');
    const groupByLength = {}
    list.forEach((str)=>{
        str = `${str[0].toLowerCase()}${str.substring(1)}`;
        if(!groupByLength[str.length]){
            groupByLength[str.length] = [];
            lengths.push(str.length);
        }
        groupByLength[str.length].push(str);
    });
    lengths.sort((a,b)=>a-b);
    const result = [];
    for(let i=0;i<lengths.length;i++){
        result.push(...groupByLength[lengths[i]]);
    }
    result[0] = `${result[0][0].toUpperCase()}${result[0].substring(1)}`
    return result.join(' ')
};