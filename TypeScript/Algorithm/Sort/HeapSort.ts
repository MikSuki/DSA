import { MinHeap } from "Data_Structure/Heap/min_heap"

/**
 * 透過 heap 進行排序
 * 把所有資料插入heap，在不斷的抽取出最小值
 * 
 * @complexity O(nlogn)
 * 
 * @param input input data
 * @returns sorted array
 */
export function HeapSort(input: number[]): number[] {
    const mh: MinHeap = new MinHeap()
    const n = input.length
    const sorted: number[] = new Array(n)

    input.forEach(e => mh.insert(e))
    for (let i = 0; i < n; ++i)
        sorted[i] = mh.extractMin()

    return sorted
}