/**
 * -- iterative version
 * 
 * find the first element in input which is equal to target.
 * 
 * Time Complexity: O(log n) 
 * @param {number[]} input sorted sequence
 * @param {number} target search value
 * @return {number} index of element equal to target. if not found, return -1.
 */

export function BinarySearch_Iterative(input: number[], target: number): number {
    let l: number = 0,
        r: number = input.length - 1;
    while (l <= r) {
        const m: number = (l + r) >> 1
        if (input[m] == target)
            return m
        else if (input[m] < target)
            l = m + 1
        else
            r = m - 1
    }
    return -1
}

/**
 * -- recursive version
 * 
 * find the first element in input which is equal to target.
 * 
 * Time Complexity: O(log n) 
 * @param {number[]} input sorted sequence
 * @param {number} target search value
 * @return {number} index of element equal to target. if not found, return -1.
 */

export function BinarySearch_Recursive(input: number[], target: number, l: number, r: number): number {
    if (l > r) return -1
    const m: number = (l + r) >> 1
    if (input[m] == target)
        return m
    if (input[m] < target)
        return BinarySearch_Recursive(input, target, m + 1, r)
    return BinarySearch_Recursive(input, target, l, r - 1)
}

