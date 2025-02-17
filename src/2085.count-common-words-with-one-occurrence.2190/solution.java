class Solution {
    public int countWords(String[] words1, String[] words2) {
        Map<String,Long> map1 = toMap(words1);
        Map<String,Long> map2 = toMap(words2);
        
        int result = 0;
        for(String word : map1.keySet()){
            if(map1.get(word).equals(1L) && map2.getOrDefault(word,0L).equals(1L)){
                result++;
            }
        }
        return result;
    }

    private Map<String,Long> toMap(String[] words){
        return Arrays.stream(words).collect(Collectors.groupingBy(Function.identity(),Collectors.counting()));
    }

}