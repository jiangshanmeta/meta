/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
    // 枚举所有有效(那一堆if else)情况
    function backTracking(list,sequence,used,A){
        if(list.length === 4){
            return sequence.push(list.slice());
        }
        for(let i=0;i<A.length;i++){
            if(used[i]){
                continue;
            }
            
            let len = list.length;
            if(len === 0){
                if(A[i]>2){
                    continue;
                }
            }else if(len === 1){
                if(list[0] === 2 && A[i]>3){
                    continue;
                }
            }else if(len === 2){
                if(A[i]>5){
                    continue;
                }
            }
            
            used[i] = true
            list.push(A[i]);
            backTracking(list,sequence,used,A);
            list.pop();
            used[i] = false;
        }
    }
    let sequence = [];
    let used = new Array(4).fill(false);
    backTracking([],sequence,used,A);
    if(sequence.length === 0){
        return "";
    }
    // 映射为时间
    let time = sequence.map((list)=>{
        return (list[0]*10+list[1])*60 + list[2]*10+list[3];
    });
    // 找到对应时间最大的项
    let index = 0;
    let value = time[0];
    for(let i=1;i<time.length;i++){
        if(time[i]>value){
            index = i;
            value = time[i];
        }
    }

    return `${sequence[index][0]}${sequence[index][1]}:${sequence[index][2]}${sequence[index][3]}`
};