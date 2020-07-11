/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    if(k<2){
        return s.length;
    }
    // separate[i]表示在该位置需要分割
    const separate = new Array(s.length).fill(false);
    function helper(start,end){
        // 拥有的字符少于k
        if(end-start+1<k){
            return 0;
        }
        // 统计数量
        const counts = new Array(26).fill(0);
        const indexs = new Array(26);
        // 是否需要进一步分割才能确定
        let flag = false;
        for(let i=start;i<end+1;i++){
            const code = s.charCodeAt(i)-97;
            counts[code]++;
            (indexs[code] || (indexs[code] = [])).push(i);
        }
        for(let i=0;i<26;i++){
            if(counts[i] === 0){
                continue;
            }
            // 数量不满足
            if(counts[i]<k){
                flag = true;
                for(let j=0;j<indexs[i].length;j++){
                    separate[indexs[i][j]] = true;
                }
            }
        }
        if(flag){
            let index = start;
            let result = 0;
            while(index<end+1){
                // 找到子单元的开始与结束
                while(index<end+1 && separate[index]){
                    index++;
                }
                start = index;
                while(index<end+1 && !separate[index]){
                    index++;
                }
                result = Math.max(result,helper(start,index-1));
            }
            return result;
        }
        return end-start+1;
    }
    
    return helper(0,s.length-1);
};