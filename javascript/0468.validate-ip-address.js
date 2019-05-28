/**
 * @param {string} IP
 * @return {string}
 */
const numMap = {
    0:true,
    1:true,
    2:true,
    3:true,
    4:true,
    5:true,
    6:true,
    7:true,
    8:true,
    9:true,
}
function isIPv4(IP){
    const arr = IP.split(".");
    if(arr.length !== 4){
        return false;
    }
    for(let i=0;i<4;i++){
        if(arr[i].length<1 || arr[i].length>3 || (arr[i].length>1 && arr[i][0] === '0')){
            return false;
        }
        for(let j=0;j<arr[i].length;j++){
            if(numMap[arr[i][j]] === undefined){
                return false;
            }
        }
        
        if(+arr[i]>255){
            return false;
        }
    }
    return true;
}
const map = {
    0:true,
    1:true,
    2:true,
    3:true,
    4:true,
    5:true,
    6:true,
    7:true,
    8:true,
    9:true,
    a:true,
    A:true,
    b:true,
    B:true,
    c:true,
    C:true,
    d:true,
    D:true,
    e:true,
    E:true,
    f:true,
    F:true,
}

function isIPv6(IP){
    const arr = IP.split(":");
    if(arr.length !== 8){
        return false;
    }
    for(let i=0;i<8;i++){
        if(arr[i].length<1 || arr[i].length>4){
            return false;
        }
        for(let j=0;j<arr[i].length;j++){
            if(map[arr[i][j]] === undefined){
                return false;
            }
        }
    }
    
    return true;
}

var validIPAddress = function(IP) {
    if(IP.includes('.')){
        return isIPv4(IP)?'IPv4':'Neither';
    }else if(IP.includes(":")){
        return isIPv6(IP)?'IPv6':'Neither';
    }
    return 'Neither';
};