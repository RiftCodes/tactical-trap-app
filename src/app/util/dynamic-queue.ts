/**
 * Tactical Traps Bluetooth Lock App
 * (c) 2019-2022 Tactical Traps https://www.tacticaltraps.com/
 * License: Proprietary, by permission only
 */

/** DynamicQueue
 *
 * A class designed to queue Promise-returning functions for
 * sequential execution.
 */

interface QueueItem<T = any> {
  operation: () => Promise<T>; // Function returning a Promise with generic type T
  resolve: (value: T) => void; // Resolve function with typed value
  reject: (reason?: any) => void; // Reject function with optional reason
}

export class DynamicQueue {
  private queue: QueueItem[] = []; // Typed array of QueueItem
  private pendingPromise = false;
  private workingOnPromise = false;

  /**
   * Flushes the queue by clearing all items.
   */
  flush(): void {
    this.queue = [];
  }

  /**
   * Add a function to the queue for execution; return an enclosing Promise.
   * The secondary Promise is needed because the function's Promise can only
   * be secured by beginning execution.
   *
   * @param operation - The Promise-returning function to enqueue
   * @returns Promise for the operation's result
   */
  enqueue<T = any>(operation: () => Promise<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this.queue.push({
        operation,
        resolve,
        reject,
      });
      this.dequeue();
    });
  }

  /** If not busy, pull the next function from the queue and execute it. When the
   * promise completes, the next item is recursively started. Repeats until
   * the queue is empty. With promises, the enqueueing task only needs to
   * invoke dequeue() when it pushes onto an empty queue.
   *
   * @returns boolean indicating if an item was dequeued
   */
  private dequeue(): boolean {
    if (this.workingOnPromise) {
      return false;
    }
    const item = this.queue.shift();
    if (!item) {
      return false;
    }
    try {
      this.workingOnPromise = true;
      item
        .operation()
        .then((value: any) => {
          // Explicitly typed value, can be refined with T
          this.workingOnPromise = false;
          item.resolve(value);
          this.dequeue();
        })
        .catch((err: any) => {
          // Explicitly typed err, can be refined
          this.workingOnPromise = false;
          item.reject(err);
          this.dequeue();
        });
    } catch (err: any) {
      this.workingOnPromise = false;
      item.reject(err);
      this.dequeue();
    }
    return true;
  }
}

export default DynamicQueue;
