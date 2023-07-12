/**
 * min heap
 * 一棵binary complete tree
 * 且滿足任何parent都比child小
 * 
 */
export class MinHeap {
    public heap: number[]
    private size: number

    constructor() {
        this.heap = []
        this.size = 0
    }

    /**
     * 找最小值
     * @complexity O(1)
     * @return minimum
     */
    public getMin(): number {
        return this.heap[0]
    }

    /**
     * 插入節點
     *  1. 先插到樹的最後一格+1的位置
     *  2. 為滿足大小條件，不斷往上看，如果比parnet小就互換值，直到沒有或到達root
     * @complexity O(logn)
     * @param v inserted value
     */
    public insert(v: number) {
        let i: number = this.size
        this.heap[i] = v

        while (i > 0) {
            const parent: number = i % 2 ? (i - 1) >> 1 : (i - 2) >> 1
            if (v < this.heap[parent])
                this.heap[i] = this.heap[parent]
            else
                break
            i = parent
        }

        this.heap[i] = v
        ++this.size
    }

    /**
     * 找最小值，並刪除他
     * 把最後一格的內容暫時放到root
     * 接著執行heapify
     * @complexity O(logn)
     * @returns minimum
     */
    public extractMin(): number {
        const min: number = this.heap[0]
        this.heap[0] = this.heap[this.size - 1]
        --this.size

        this.heapify(0)

        return min
    }

    /**
     * 調整heap的大小關係
     * 從node的位置開始，如果他比左或右child大的話，就跟比較小的那邊交換
     * 然後再繼續從交換的位置執行，直到沒有比較大或到leaf了
     * @complexity O(logn)
     * @param node 
     */
    public heapify(node: number) {
        const heap: number[] = this.heap
        const left: number = node * 2 + 1
        const right: number = node * 2 + 2
        let min: number = node

        if (left < this.size && heap[left] < heap[min])
            min = left
        if (right < this.size && heap[right] < heap[min])
            min = right
        if (min != node) {
            // swap
            const tmp: number = heap[node]
            heap[node] = heap[min]
            heap[min] = tmp

            this.heapify(min)
        }
    }

}