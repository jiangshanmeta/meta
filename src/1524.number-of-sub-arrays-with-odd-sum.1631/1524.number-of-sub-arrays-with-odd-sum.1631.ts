function numOfSubarrays(arr: number[]): number {
    let result = 0;
    const mod = 10**9+7;
    const counts = [1,0];
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum = (sum+arr[i])%2;
        result = (result+counts[sum^1])%mod;
        counts[sum]++;
    }
    return result;
};