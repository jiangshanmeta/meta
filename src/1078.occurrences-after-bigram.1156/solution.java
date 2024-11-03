class Solution {
    public String[] findOcurrences(String text, String first, String second) {
        String[] texts = text.split(" ");
        List<String> result = new ArrayList<>();
        for(int i=0;i<texts.length-2;i++){
            if(texts[i].equals(first) && texts[i+1].equals(second)){
                result.add(texts[i+2]);
            }
        }

        return result.toArray(new String[0]);
    }
}