class Solution {
    public int[][] flipAndInvertImage(int[][] image) {
        int N = image.length;
        for(int[] row : image){
            int l = 0;
            int r = N-1;
            while(l<r){
                if(row[l] == row[r]){
                    row[l] ^= 1;
                    row[r] ^= 1;
                }
                l++;
                r--;
            }
            if(l == r){
                row[l] ^= 1;
            }
        }
        return image;
    }
}