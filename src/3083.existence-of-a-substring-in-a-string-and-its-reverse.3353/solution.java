class Solution {
    public boolean isSubstringPresent(String s) {
        Set<String> set = new HashSet<>();
        for(int i=0;i<s.length()-1;i++){
            set.add(String.valueOf(new char[]{s.charAt(i+1),s.charAt(i) }));
        }
        for(int i=0;i<s.length()-1;i++){
            if(set.contains(s.substring(i,i+2))){
                return true;
            }
        }
        return false;
    }
}