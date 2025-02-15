class Solution {
    public int countLargestGroup(int n) {
        int[] counts = new int[37];
        while (n>0){
            counts[calc(n)]++;
            n--;
        }

        int count = 0;
        int max = 0;
        for(int c : counts){
            if(c>max){
                count = 1;
                max = c;
            }else if(c == max){
                count++;
            }
        }

        return count;
    }

    private int calc(int n){
        int r = 0;
        while (n>0){
            r += n%10;
            n /= 10;
        }
        return r;
    }
}