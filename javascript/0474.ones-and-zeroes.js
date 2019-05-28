/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    // 状态转移方程
    //  F(l,m,n) = max(f(l-1,m,n),f(l-1,m-zeroi,n-onei)+1)  m>=zeroi n>=zeroi
    //  F(l,m,n) = F(l-1,m,n)   m<zeroi || n<zeroi
    //  F(0,m,n) = matrix
        
        let zeroCount = 0;
        let str = strs[0];
        for(let i=0;i<str.length;i++){
            if(str[i] === '0'){
                zeroCount++;
            }
        }
        let oneCount = str.length-zeroCount;
        
        // 初始化条件，是一个矩阵
        const matrix = [];
        for(let i=0;i<m+1;i++){
            let arr = [];
            for(let j=0;j<n+1;j++){
                if(i>=zeroCount && j>=oneCount){
                    arr.push(1)
                }else{
                    arr.push(0);
                }
            }
            matrix.push(arr);
        }
        // 逐渐向后地推
        for(let i=1;i<strs.length;i++){
            let str = strs[i];
            let zeroCount = 0;
            for(let j=0;j<str.length;j++){
                str[j] === '0' && zeroCount++;
            }
            let oneCount = str.length-zeroCount;
            // 需要之前的状态，所以从m=>0 n=>0
            for(let j=m;j>-1;j--){
                for(let k=n;k>-1;k--){
                    // 递推方程
                    if(j>=zeroCount && k>=oneCount){
                        matrix[j][k] = Math.max(matrix[j-zeroCount][k-oneCount]+1,matrix[j][k]);
                    }
                }
            }
            
        }
        return matrix[m][n];
    };