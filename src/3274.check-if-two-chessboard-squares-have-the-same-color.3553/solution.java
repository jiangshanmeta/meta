class Solution {
    public boolean checkTwoChessboards(String coordinate1, String coordinate2) {
        int r1 = coordinate1.charAt(0)- 'a';
        int c1 = coordinate1.charAt(1)- '0';
        boolean isWhite1 = r1%2 == c1%2;

        int r2 = coordinate2.charAt(0)- 'a';
        int c2 = coordinate2.charAt(1)- '0';
        boolean isWhite2 = r2%2 == c2%2;  
        
        return isWhite1 == isWhite2;
    }
}