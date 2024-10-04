class Solution {
    public String[] uncommonFromSentences(String s1, String s2) {
        var s1Arr = s1.split(" ");
        Map<String, Long> s1CountMap = Arrays.stream(s1Arr)
                .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));

        var s2Arr = s2.split(" ");
        Map<String, Long> s2CountMap = Arrays.stream(s2Arr)
                .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));

        List<String> result = new ArrayList<>();

        for (Map.Entry<String, Long> entry : s1CountMap.entrySet()) {
            if (entry.getValue() == 1 && !s2CountMap.containsKey(entry.getKey())) {
                result.add(entry.getKey());
            }
        }
        for (Map.Entry<String, Long> entry : s2CountMap.entrySet()) {
            if (entry.getValue() == 1 && !s1CountMap.containsKey(entry.getKey())) {
                result.add(entry.getKey());
            }
        }

        return result.toArray(new String[0]);
    }
}