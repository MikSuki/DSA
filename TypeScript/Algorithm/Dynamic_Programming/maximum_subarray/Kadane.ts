/**
 * @description 找輸入之subarray的最大總和，
 * lm為local maximum，記錄以第i個當作結尾最大的和，因為前一個可能為負數，所以取自己or自己+lm
 * 之後再記錄global maximum即可
 * 
 * @complexity O(n)
 * 
 * @param input
 * @returns 
 */
export function Kadane(input: number[]): number {
    /** local maximum -- maximum ending at position i*/
    let lm: number = input[0]
    let res: number = input[0]

    for (const v of input) {
        lm = Math.max(v, lm + v)
        res = Math.max(res, lm)
    }

    return res
}