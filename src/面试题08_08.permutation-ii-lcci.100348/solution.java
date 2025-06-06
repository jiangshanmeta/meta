class Solution {
    char[] chars;
    boolean[] used;
    StringBuilder stringBuilder = new StringBuilder();
    List<String> result = new ArrayList<>();
    public String[] permutation(String S) {
        chars = S.toCharArray();
        Arrays.sort(chars);
        used = new boolean[chars.length];

        backTracking();

        return result.toArray(new String[0]);
    }

    private void backTracking(){
        if(stringBuilder.length() == chars.length){
            result.add(stringBuilder.toString());
            return;
        }
        for(int i=0;i< chars.length; i++){
            if(used[i] || (i>0 && chars[i] == chars[i-1] && !used[i-1])){
                continue;
            }
            used[i] = true;
            stringBuilder.append(chars[i]);
            backTracking();
            stringBuilder.deleteCharAt(stringBuilder.length()-1);
            used[i] = false;
        }

    }
}