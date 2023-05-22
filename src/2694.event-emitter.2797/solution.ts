type Callback = (...args: any[]) => any;
type Subscription = {
    unsubscribe: () => void
}

class EventEmitter {
  private map = new Map<string, Callback[]>()
  subscribe (eventName: string, callback: Callback): Subscription {
      if (!this.map.has(eventName)) {
          this.map.set(eventName, []);
      }
    this.map.get(eventName)!.push(callback);

    return {
        unsubscribe: () => {
            const list = this.map.get(eventName)!;
            const index = list.indexOf(callback);
            if (index !== -1) {
                list.splice(index, 1);
            }
        },
    };
  }

  emit (eventName: string, args: any[] = []): any {
      const list = this.map.get(eventName);
      if (!list) {
          return [];
      }
      return list.map(fn => fn(...args));
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
