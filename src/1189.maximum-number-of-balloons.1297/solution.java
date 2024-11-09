class Solution {
    public int maxNumberOfBalloons(String text) {
        int[] counts = new int[26];
        for(char c : text.toCharArray()){
            counts[c-'a']++;
        }

        return min(counts['b'-'a'],counts[0],counts['l'-'a']>>1,counts['o'-'a']>>1,counts['n'-'a'] );
    }

    private int min(int... nums){
        int min = Integer.MAX_VALUE;
        for(int n : nums){
            min = Math.min(min,n);
        }
        return min;
    }
}