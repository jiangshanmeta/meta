class Solution {
    public String restoreString(String s, int[] indices) {
        char[] result = new char[s.length()];
        char[] ss = s.toCharArray();
        for(int i=0;i<indices.length;i++){
            result[indices[i]] = ss[i];
        }
        return String.valueOf(result);
    }
}