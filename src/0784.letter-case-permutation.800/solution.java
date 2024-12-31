class Solution {
    char[] chars;
    List<String> result;
    public List<String> letterCasePermutation(String s) {
        chars = s.toCharArray();
        result = new ArrayList<>();
        backTracking(0,new StringBuilder());
        return result;
    }

    private void backTracking(int index,StringBuilder stringBuilder){
        if(index == chars.length){
            result.add(stringBuilder.toString());
            return;
        }
        if(Character.isDigit(chars[index])){
            stringBuilder.append(chars[index]);
            backTracking(index+1,stringBuilder);
            stringBuilder.deleteCharAt(stringBuilder.length()-1);
        }else{
            stringBuilder.append(Character.toUpperCase(chars[index]));
            backTracking(index+1,stringBuilder);
            stringBuilder.deleteCharAt(stringBuilder.length()-1);

            stringBuilder.append(Character.toLowerCase(chars[index]));
            backTracking(index+1,stringBuilder);
            stringBuilder.deleteCharAt(stringBuilder.length()-1);
        }


    }

}