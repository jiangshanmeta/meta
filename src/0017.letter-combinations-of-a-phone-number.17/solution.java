class Solution {
    private final Map<Character,String[]> map;

    public Solution() {
        map = new HashMap<>();
        map.put('2', new String[]{"a", "b", "c"});
        map.put('3',new String[]{"d","e","f"});
        map.put('4',new String[]{"g","h","i"});
        map.put('5',new String[]{"j","k","l"});
        map.put('6',new String[]{"m","n","o"});
        map.put('7',new String[]{"p","q","r","s"});
        map.put('8',new String[]{"t","u","v"});
        map.put('9',new String[]{"w","x","y","z"});

    }

    public List<String> letterCombinations(String digits) {
        List<String> result = new ArrayList<>();
        if(digits.isEmpty()){
            return result;
        }
        backTracking(digits,0,new ArrayList<>(),result);

        return result;
    }

    private void backTracking(String digits, int index,List<String> accumulate, List<String> result  ){
        if(index == digits.length()){
            result.add(String.join("", accumulate));
            return;
        }
        String[] candidates = map.get(digits.charAt(index++));
        for (String candidate : candidates) {
            accumulate.add(candidate);
            backTracking(digits, index, accumulate, result);
            accumulate.removeLast();
        }

    }

}