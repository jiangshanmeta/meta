/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    const result = new Array(n).fill(0);

    let lastId = logs[0].slice(0,logs[0].indexOf(':'));
    let lastTime = +logs[0].slice(logs[0].lastIndexOf(':')+1);
    let lastMode = 'start';
    const idStack = [lastId];
    const modeStack = ['start'];
    for(let i=1;i<logs.length;i++){
        let index1 = logs[i].indexOf(':');
        let index2 = logs[i].lastIndexOf(':');
        let curId = logs[i].slice(0,index1);
        let curTime = +logs[i].slice(index2+1);
        let curMode = logs[i].slice(index1+1,index2);
        curMode === 'end' && curTime++;
        if(curMode === 'start'){
            result[idStack[idStack.length-1]] += curTime-lastTime;
            idStack.push(curId);
        }else{
            result[curId] += curTime-lastTime;
            idStack.pop();
        }
        
        lastTime = curTime;
        lastMode = curMode;
    }
    
    return result;
};