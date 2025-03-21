class Solution {
    public int numberOfAlternatingGroups(int[] colors) {
        int L = colors.length;
        int result = colors[0] != colors[1] && colors[0] != colors[L-1]?1:0;
        for(int i=1;i<colors.length-1;i++){
            if(colors[i] != colors[i-1] && colors[i] != colors[i+1]){
                result++;
            }
        }
        
        if(colors[L-1] != colors[L-2] && colors[L-1] != colors[0]){
            result++;
        }
        
        return result;
    }
}