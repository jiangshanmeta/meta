class Solution {
    public String getEncryptedString(String s, int k) {
        int L = s.length();
        char[] charsOrigin = s.toCharArray();
        char[] charsTarget = new char[L];
        for(int i=0;i<L;i++){
            charsTarget[i] = charsOrigin[(i+k)%L];
        }
        
        return String.valueOf(charsTarget);
    }
}