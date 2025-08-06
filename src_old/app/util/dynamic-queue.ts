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

export class DynamicQueue {
    queue = [];
    pendingPromise = false;
    workingOnPromise = false;
    
    flush() {
        this.queue = [];
    }

    /**
     * Add a function to the queue for execution; return an enclosing Promise.
     * The secondary Promise is needed because the function's Promise can only
     * be secured by beginning execution.
     *
     * @param operation
     * @returns Promise for operation
     */
     enqueue(operation: () => Promise<any>): Promise<any> {
        return new Promise((resolve, reject) => {
            this.queue.push({
                operation,
                resolve,
                reject,
            });
            this.dequeue();
        });
    }

    /** If not busy, pull next function from queue and execute it.  When the
     *  promise completes, the next item is recursively started.  Repeats until
     *  the queue is empty.  With promises, the enqueueing task only needs to
     *  invoke dequeue() when it pushes onto an empty queue.
     */
    private dequeue() {
        if (this.workingOnPromise) {
            return false;
        }
        const item = this.queue.shift();
        if (!item) {
            return false;
        }
        try {
            this.workingOnPromise = true;
            item.operation()
                .then((value) => {
                    this.workingOnPromise = false;
                    item.resolve(value);
                    this.dequeue();
                })
                .catch(err => {
                    this.workingOnPromise = false;
                    item.reject(err);
                    this.dequeue();
                });
        } catch (err) {
            this.workingOnPromise = false;
            item.reject(err);
            this.dequeue();
        }
        return true;
    }
}
