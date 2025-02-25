class Solution {
    private static final char[] vowels = new char[]{'a','e','i','o','u'};

    public int[] vowelStrings(String[] words, int[][] queries) {
        int[] prefixs = new int[words.length+1];
        for(int i=0;i< words.length;i++){
            prefixs[i+1] = prefixs[i] + (check(words[i])?1:0);
        }
        int[] result = new int[queries.length];

        for(int i=0;i<queries.length;i++){
            result[i] = prefixs[queries[i][1]+1]- prefixs[queries[i][0]];
        }

        return result;
    }

    private boolean check(String s){
        char first = s.charAt(0);
        char last = s.charAt(s.length()-1);
        int match = 0;
        for(char c : vowels ){
            if(c == first){
                match++;
            }
            if(c == last){
                match++;
            }
        }


        return match == 2;
    }
}