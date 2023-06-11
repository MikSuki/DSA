/**
 * find the first element in input which is equal to target.
 * 
 * Time Complexity: O(n) 
 * @param {number[]} input sorted sequence
 * @param {number} target search value
 * @return {number} index of element equal to target. if not found, return -1.
 */
export function LinearSearch(input: number[], target: number): number {
    for (let i = 0; i < input.length; ++i)
        if (input[i] == target)
            return i
    return -1
}

/**
 * find the first element in input which is greater and equal than target.
 * 
 * Time Complexity: O(n) 
 * @param {number[]} input sorted sequence
 * @param {number} target search value
 * @return {number} index of first element greater and equal than  target. if not found, return -1.
 */
export function LinearLowerBound(input: number[], target: number): number {
    for (let i = 0; i < input.length; ++i)
        if (input[i] >= target)
            return i
    return -1
}