class Solution {
    public int minMaxDifference(int num) {
        String s = String.valueOf(num);
        
        int max = num;
        int min = num;
        
        for(int i=0;i<10;i++){
            int a = Integer.parseInt(s.replaceAll(String.valueOf(i),"9"));
            int b = Integer.parseInt(s.replaceAll(String.valueOf(i),"0"));
            max = Math.max(max,a);
            min = Math.min(min,b);
        }
        
        return max-min;
    }
}