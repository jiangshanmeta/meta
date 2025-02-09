class Solution {
    private final Map<String,Integer> map = new HashMap<>();

    public String mostCommonWord(String paragraph, String[] banned) {
        Set<String> set = new HashSet<>(Arrays.asList(banned));

        char[] chars = paragraph.toLowerCase().toCharArray();
        StringBuilder stringBuilder = new StringBuilder();
        int index = 0;
        while (index<chars.length){
            char c = chars[index++];
            if(c == ' ' || c == '!' || c == '?' || c == '\'' || c == ',' || c == ';' || c == '.'){
                updateCount(stringBuilder);
                continue;
            }
            stringBuilder.append(c);
        }
        updateCount(stringBuilder);
        String result = "";
        int maxCount = 0;
        for(Map.Entry<String,Integer> entry : map.entrySet() ){
            if(set.contains(entry.getKey())){
                continue;
            }
            if(entry.getValue()>maxCount){
                result = entry.getKey();
                maxCount = entry.getValue();
            }
        }

        return result;
    }


    private void updateCount(StringBuilder s){
        if(!s.isEmpty()){
            map.merge(s.toString(),1, Integer::sum);
            s.delete(0,s.length());
        }


    }
}