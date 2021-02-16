function generateTheString(n: number): string {
    if(n&1){
        return 'a'.repeat(n);
    }
    return 'a'.repeat(n-1)+'b';
};