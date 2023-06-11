/**
 * -- iterative version
 * 
 * find the first element in input which is greater and equal than target.
 * 
 * Time Complexity: O(log n) 
 * @param {number[]} input sorted sequence
 * @param {number} target search value
 * @return {number} index of first element greater and equal than  target. if not found, return -1.
 */

export function LowerBound_Iterative(input: number[], target: number): number {
    let l: number = 0,
        r: number = input.length - 1
    while (l < r) {
        const m = (l + r) >> 1
        if (input[m] < target)
            l = m + 1
        else
            r = m
    }
    return input[l] >= target ? l : -1
}

/**
 * -- recursive version
 * 
 * find the first element in input which is greater and equal than target.
 * 
 * Time Complexity: O(log n) 
 * @param {number[]} input sorted sequence
 * @param {number} target search value
 * @return {number} index of first element greater and equal than target. if not found, return -1.
 */

export function LowerBound_Recursive(input: number[], target: number, l: number, r: number): number {
    if (l >= r)
        return input[l] >= target ? l : -1
    const m = (l + r) >> 1
    if (input[m] < target)
        return LowerBound_Recursive(input, target, m + 1, r)
    return LowerBound_Recursive(input, target, l, m)
}