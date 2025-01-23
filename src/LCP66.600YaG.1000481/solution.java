class Solution {
    public int minNumBooths(String[] demand) {
        int[] total = new int[26];
        for(String d:demand){
            int[] counts = calc(d.toCharArray());
            for(int i=0;i<26;i++){
                total[i] = Math.max(total[i],counts[i]);
            }
        }
        int result = 0;
        for(int i=0;i<26;i++){
            result += total[i];
        }
        return result;
    }
    
    private int[] calc(char[] chars){
        int[] counts = new int[26];
        for(int c:chars){
            counts[c-'a']++;
        }
        return counts;
    }
}