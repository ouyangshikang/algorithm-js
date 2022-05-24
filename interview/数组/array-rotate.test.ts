import { rotateArray } from './array-rotate';

describe('数组旋转', () => {
    it('正常情况', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7];
        const k = 3;

        const res = rotateArray(arr, k);
        expect(res).toEqual([5, 6, 7, 1, 2, 3, 4]);
    });
});
