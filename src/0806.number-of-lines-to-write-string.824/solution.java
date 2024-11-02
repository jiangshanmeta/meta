class Solution {
    public int[] numberOfLines(int[] widths, String s) {
        int row = 0;
        int col = 0;
        for(char c : s.toCharArray()){
            int w = widths[c-'a'];
            if(col+w>100){
                row++;
                col = w;
            }else{
                col += w;
            }
        }
        return new int[]{row+1,col};
    }
}