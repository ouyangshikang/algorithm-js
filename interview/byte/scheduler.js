// 实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。完善代码中Scheduler类。

class Scheduler {
    // 并发量
    concurrency = 2;
    // 正在运行的数量
    runningCount = 0;
    // 任务队列
    queue = [];

    add(task) {
        return new Promise((resolve) => {
            this.queue.push({
                taskGenerator: task,
                resolve,
            });
            this.run();
        });
    }

    run() {
        while (this.queue.length > 0 && this.runningCount < this.concurrency) {
            const curTask = this.queue.shift();
            this.runningCount++;

            curTask.taskGenerator().then((result) => {
                this.runningCount--;
                curTask.resolve(result);
                this.run();
            });
        }
    }
}

{
    // test
    const timeout = (time) =>
        new Promise((resolve) => {
            setTimeout(resolve, time);
        });

    const scheduler = new Scheduler();
    const addTask = (time, order) => {
        scheduler.add(() => timeout(time)).then(() => console.log(order));
    };

    addTask(1000, '1');
    addTask(500, '2');
    addTask(300, '3');
    addTask(400, '4');

    // output: 2 3 1 4
    // 一开始，1、2两个任务进入队列
    // 500ms时，2完成，输出2，任务3进队
    // 800ms时，3完成，输出3，任务4进队
    // 1000ms时，1完成，输出1
    // 1200ms时，4完成，输出4
}
