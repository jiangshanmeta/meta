/**
 * @param {string[]} username
 * @param {number[]} timestamp
 * @param {string[]} website
 * @return {string[]}
 */
var mostVisitedPattern = function(username, timestamp, website) {
    // 按用户名聚合
    const groupByUser = username.reduce((obj,username,index)=>{
        (obj[username] || (obj[username] = [])).push([timestamp[index],website[index]]);
        return obj;
    },{})
    
    const keyCounts = Object.values(groupByUser).reduce((obj,list)=>{
        if(list.length<3){
            return obj;
        }
        // 按时间排序
        list.sort((a,b)=>a[0]-b[0]);
        // 一个人可能访问的三元组
        const hashMap = {};
        for(let i=0;i<list.length-2;i++){
            for(let j=i+1;j<list.length-1;j++){
                for(let k=j+1;k<list.length;k++){
                    const key = `${list[i][1]},${list[j][1]},${list[k][1]}`;
                    if(hashMap[key]){
                        continue;
                    }
                    hashMap[key] = true;
                    obj[key] = (obj[key] || 0)+1;
                }
            }
        }
        return obj;
    },{});
    // 找出频率最大的
    const keys = Object.keys(keyCounts);
    let maxCount = 0;
    let resultStr = '';
    for(let i=0;i<keys.length;i++){
        if(keyCounts[keys[i]]>maxCount){
            maxCount = keyCounts[keys[i]];
            resultStr = keys[i];
        }else if(keyCounts[keys[i]]===maxCount && keys[i]<resultStr){
            resultStr = keys[i];
        }
    }
    return resultStr.split(',');
};