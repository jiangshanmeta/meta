class Solution {
    public int maxDifference(String s) {
        int[] counts = new int[26];
        for(char c : s.toCharArray()){
            counts[c-'a']++;
        }
        int maxOdd = 0;
        int minEven = s.length();
        for(int n : counts){
            if(n == 0){
                continue;
            }
            if(n%2 == 0){
                minEven = Math.min(minEven,n);
            }else{
                maxOdd = Math.max(maxOdd,n);
            }
        }

        return maxOdd-minEven;
    }
}