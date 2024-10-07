class Solution {
    public int maximum69Number(int num) {
        return Integer.parseInt(String.valueOf(num).replaceFirst("6", "9"));

    }
}