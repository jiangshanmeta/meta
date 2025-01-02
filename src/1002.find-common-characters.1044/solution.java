class Solution {
    public List<String> commonChars(String[] words) {
        int[] result = new int[26];
        Arrays.fill(result,Integer.MAX_VALUE);
        for(String s : words){
            int[] counts = map2counts(s);
            for(int i=0;i<26;i++){
                result[i] = Math.min(result[i],counts[i]);
            }
        }
        List<String> list = new ArrayList<>();
        for(int i=0;i<26;i++){
            int count = result[i];
            String s = String.valueOf( (char)(i+'a') );
            while (count>0){
                count--;
                list.add(s);
            }
            
        }
        return list;
    }

    private int[] map2counts(String s){
        int[] result = new int[26];
        for(char c:s.toCharArray()){
            result[c-'a']++;
        }
        return result;
    }

}