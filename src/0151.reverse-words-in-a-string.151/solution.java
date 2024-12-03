class Solution {
    public String reverseWords(String s) {
        return String.join(" ", reverse(s.trim().split("\\s+")));
    }
    private String[] reverse(String[] arr){
        int l = 0;
        int r = arr.length-1;
        while (l<r){
            String tmp = arr[l];
            arr[l] = arr[r];
            arr[r] = tmp;
            l++;
            r--;
        }
        return arr;
    }
}