class Solution {
    private final int mod = 1000000007;
    public int numPrimeArrangements(int n) {
        int[] primes = new int[]{2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97};
        int prime = 0;
        for(int i=0;i<primes.length;i++){
            if(primes[i]>n){
                break;
            }
            prime++;
        }

        return (int)(factorial(prime)*factorial(n-prime)%mod);
    }

    private long factorial(int n){
        long result = 1;
        while (n>0){
            result = (result*n)%mod;
            n--;
        }
        return result;
    }

}