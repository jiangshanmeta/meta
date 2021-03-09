function minCut(s: string): number {
    const isPalindrome:boolean[][] = new Array(s.length);
    for(let i=s.length-1;i>-1;i--){
        isPalindrome[i] = new Array(s.length).fill(true);
        for(let j=i+1;j<s.length;j++){
            if(s[i] !== s[j] || !isPalindrome[i+1][j-1]){
                isPalindrome[i][j] = false;
            }
        }
    }
    const dp:number[] = new Array(s.length);
    dp[0] = 0;
    for(let i=1;i<s.length;i++){
        if(isPalindrome[0][i]){
            dp[i] = 0;
        }else{
            dp[i] = i;
            for(let j=0;j<i;j++){
                if(isPalindrome[j+1][i]){
                    dp[i] = Math.min(dp[i],dp[j]+1);
                }
            }
        }
    }
    return dp[dp.length-1];
};