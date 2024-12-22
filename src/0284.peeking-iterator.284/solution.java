// Java Iterator interface reference:
// https://docs.oracle.com/javase/8/docs/api/java/util/Iterator.html

class PeekingIterator implements Iterator<Integer> {
    Integer cache = null;
    Iterator<Integer> iterator;
    public PeekingIterator(Iterator<Integer> iterator) {
        this.iterator = iterator;
    }

    // Returns the next element in the iteration without advancing the iterator.
    public Integer peek() {
        Integer val = this.next();
        cache = val;
        return val;
    }

    // hasNext() and next() should behave the same as in the Iterator interface.
    // Override them if needed.
    @Override
    public Integer next() {
        if(cache != null){
            Integer result = cache;
            cache = null;
            return result;
        }
        return iterator.next();
    }

    @Override
    public boolean hasNext() {
        return cache != null || iterator.hasNext();
    }
}