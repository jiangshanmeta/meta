class Solution {
    public String removeTrailingZeros(String num) {
        int index = num.length() - 1;
        while (index > 0 && num.charAt(index) == '0') {
            index--;
        }
        return num.substring(0, index + 1);
    }
}