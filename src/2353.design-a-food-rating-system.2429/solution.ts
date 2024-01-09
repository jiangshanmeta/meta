interface HeapItem {
    food:string;
    rating:number;
}

function gt (item1:HeapItem, item2:HeapItem) {
    if (item1.rating !== item2.rating) {
        return item1.rating > item2.rating;
    }
    return item1.food < item2.food;
}

function down (heap:HeapItem[], index:number) {
    while (2 * index + 1 < heap.length) {
        let childIndex = 2 * index + 1;
        if (childIndex + 1 < heap.length && gt(heap[childIndex + 1], heap[childIndex])) {
            childIndex++;
        }
        if (gt(heap[childIndex], heap[index])) {
            const tmp = heap[childIndex];
            heap[childIndex] = heap[index];
            heap[index] = tmp;
            index = childIndex;
        } else {
            break;
        }
    }
}

function upWithMap (heap:HeapItem[], index:number, map:Map<string, number>) {
    while (index > 0) {
        const par = (index - 1) >> 1;
        if (gt(heap[index], heap[par])) {
            map.set(heap[par].food, index);
            map.set(heap[index].food, par);
            const tmp = heap[index];
            heap[index] = heap[par];
            heap[par] = tmp;
            index = par;
        } else {
            break;
        }
    }
}

function downWithMap (heap:HeapItem[], index:number, map:Map<string, number>) {
    while (2 * index + 1 < heap.length) {
        let childIndex = 2 * index + 1;
        if (childIndex + 1 < heap.length && gt(heap[childIndex + 1], heap[childIndex])) {
            childIndex++;
        }
        if (gt(heap[childIndex], heap[index])) {
            map.set(heap[childIndex].food, index);
            map.set(heap[index].food, childIndex);
            const tmp = heap[childIndex];
            heap[childIndex] = heap[index];
            heap[index] = tmp;
            index = childIndex;
        } else {
            break;
        }
    }
}

class FoodRatings {
    private cuisineHeapMap = new Map<string, HeapItem[]>();
    private cuisineFoodIndexMaps = new Map<string, Map<string, number> >();
    private foodCuisineMap = new Map<string, string>()
    constructor (foods: string[], cuisines: string[], ratings: number[]) {
        for (let i = 0; i < foods.length; i++) {
            const heap = this.cuisineHeapMap.has(cuisines[i]) ? this.cuisineHeapMap.get(cuisines[i])! : [];
            heap.push({
                food: foods[i],
                rating: ratings[i],
            });
            this.cuisineHeapMap.set(cuisines[i], heap);
            this.foodCuisineMap.set(foods[i], cuisines[i]);
        }

        for (const [cuisine, heap, ] of this.cuisineHeapMap) {
            for (let i = (heap.length - 2) >> 1; i > -1; i--) {
                down(heap, i);
            }
            const indexMap = new Map<string, number>();
            for (let i = 0; i < heap.length; i++) {
                indexMap.set(heap[i].food, i);
            }
            this.cuisineFoodIndexMaps.set(cuisine, indexMap);
        }
    }

    changeRating (food: string, newRating: number): void {
        const cuisine = this.foodCuisineMap.get(food)!;
        const heap = this.cuisineHeapMap.get(cuisine)!;
        const foodIndexMap = this.cuisineFoodIndexMaps.get(cuisine)!;
        const index = foodIndexMap.get(food)!;

        if (newRating > heap[index].rating) {
            heap[index].rating = newRating;
            upWithMap(heap, index, foodIndexMap);
        } else {
            heap[index].rating = newRating;
            downWithMap(heap, index, foodIndexMap);
        }
    }

    highestRated (cuisine: string): string {
        return this.cuisineHeapMap.get(cuisine)![0].food;
    }
}

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */
export {};
