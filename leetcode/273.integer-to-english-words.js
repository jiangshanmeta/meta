/**
 * @param {number} num
 * @return {string}
 */
// 最无聊的hard题了吧
const mapA = {
    '10':'Ten',
    '11':'Eleven',
    '12':"Twelve",
    '13':"Thirteen",
    '14':"Fourteen",
    '15':'Fifteen',
    '16':"Sixteen",
    '17':"Seventeen",
    '18':"Eighteen",
    '19':"Nineteen",
}

const mapB = {
  '2':'Twenty',
  '3':"Thirty",
  '4':"Forty",
  '5':"Fifty",
  '6':"Sixty",
  '7':"Seventy",
  '8':"Eighty",
  '9':"Ninety",
};

const mapC = {
  '1':'One',
  '2':'Two',
  '3':"Three",
  '4':"Four",
  '5':"Five",
  '6':"Six",
  '7':"Seven",
  '8':"Eight",
  '9':"Nine",
};

const mapD = {
    1:"Thousand",
    2:"Million",
    3:"Billion",
}

function parse3(str){
    str = str.padStart(3,'0');
    const result = [];
    if(str[0] !== '0'){
        result.push(`${mapC[str[0]]} Hundred`);
    }
    if(str[1] !== '0'){
        if(str[1] === '1'){
            result.push(mapA[str.slice(1)]);
            return result.join(" ");
        }else{
            result.push(mapB[str[1]]);
        }
    }
    if(str[2] !== '0'){
        result.push(mapC[str[2]]);
    }
    return result.join(" ");
}

var numberToWords = function(num) {
    if(num === 0){
        return "Zero";
    }
    let count = 0;
    const result = [];
    while(num>0){
        const sub = parse3((num%1000)+"")
        if(sub.length){
            if(count>0){
                result.unshift(mapD[count]);
            }
            result.unshift(sub);
        }
        num = Math.floor(num/1000);
        count++;
    }
    return result.join(" ");
};