class Solution {
    public int compress(char[] chars) {

        int index = 0;
        int index2 = 0;
        while(index<chars.length){
            int count = 1;
            char c = chars[index++];
            while (index<chars.length && chars[index] == c){
                count++;
                index++;
            }

            chars[index2++] = c;
            if(count != 1){
                for(char c2 : String.valueOf(count).toCharArray()){
                    chars[index2++] = c2;
                }
            }


        }
        return index2;
    }
}