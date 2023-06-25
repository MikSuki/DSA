/**
 * @description Insertion sort
 * @complexity O(n^2)
 * 
 */
export function insertionSort(input: number[]) {
    const n: number = input.length
    for (let i = 1; i < n; ++i) {
        let j = i - 1
        let pick = input[i]
        while (j >= 0 && pick < input[j]) {
            input[j + 1] = input[j]
            --j
        }
        input[j + 1] = pick
    }
}