/**
 * 二分查找
 * 从数组中找到目标值，返回索引
 */
function binarySearch(arr: number[], target: number) {
    const length = arr.length;
    if (length === 0) return -1;

    let startIndex = 0;
    let endIndex = length - 1;

    while (startIndex <= endIndex) {
        const midIndex = Math.floor((startIndex + endIndex) / 2);
        const midValue = arr[midIndex];

        if (target < midValue) {
            // target 较小，在左侧继续查找
            endIndex = midIndex - 1;
        } else if (target > midValue) {
            // target 较大，在右侧继续查找
            startIndex = midIndex + 1;
        } else {
            return midIndex;
        }
    }
    return -1;
}

{
    // test
    const arr = [1, 2, 5, 7, 9, 10, 25, 35, 37];
    const target = 10;

    console.log(binarySearch(arr, target));
}
