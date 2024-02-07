function smallestChair(times: number[][], targetFriend: number): number {
    const timesWithIndexSeat = times.map((time,index)=>{
        return {
            time,
            index,
            seat:-1,
        }
    })

    const byArriveTime = [...timesWithIndexSeat].sort((a,b)=>a.time[0]-b.time[0]);
    const byLeaveTime = [...timesWithIndexSeat].sort((a,b)=>a.time[1]-b.time[1]);
    const heap = new Array<number>(times.length);
    for(let i=0;i<heap.length;i++){
        heap[i] = i;
    }

    const swap = (i:number,j:number)=>{
        const tmp = heap[i];
        heap[i] = heap[j];
        heap[j] = tmp;
    }

    const pushHeap = (seat:number)=>{
        let index = heap.length
        heap.push(seat);
        while(index>0){
            const parent = (index-1)>>1;
            if(heap[parent]>heap[index]){
                swap(parent,index);
                index = parent;
            }else{
                break;
            }

        }


    }

    const popHeap = ()=>{
        const result = heap[0];
        heap[0] = heap[heap.length-1];
        heap.pop();

        let index = 0;
        while(2*index+1<heap.length){
            let child = 2*index+1;
            if(child+1<heap.length && heap[child+1]<heap[child]){
                child++;                
            }
            if(heap[child]<heap[index]){
                swap(child,index);
                index = child;
            }else{
                break;
            }

        }
        return result
    }

    let indexA = 0;
    let indexL = 0;
    let result = -1;
    while(indexA<byArriveTime.length){
        const start = byArriveTime[indexA].time[0];
        while(byLeaveTime[indexL].time[1]<=start){
            const seat = byLeaveTime[indexL++].seat;
            pushHeap(seat);
        }
        const seat = popHeap();
        if(byArriveTime[indexA].index === targetFriend){
            result = seat;
            break
        }

        byArriveTime[indexA++].seat = seat;
    }


    return result
};