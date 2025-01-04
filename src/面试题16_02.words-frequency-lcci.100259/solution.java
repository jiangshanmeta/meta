class WordsFrequency {
    private final Map<String,Integer> map = new HashMap<>();

    public WordsFrequency(String[] books) {
        for(String book : books){
            map.merge(book,1, Integer::sum);
        }

    }

    public int get(String word) {
        return map.getOrDefault(word,0);
    }
}

/**
 * Your WordsFrequency object will be instantiated and called as such:
 * WordsFrequency obj = new WordsFrequency(book);
 * int param_1 = obj.get(word);
 */