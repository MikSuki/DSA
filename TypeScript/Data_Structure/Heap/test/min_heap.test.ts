import { MinHeap } from "../min_heap"
import { data_NonSorted_Repeated } from "util/data"

const alpha: number = 100
const size: number = 2000
const time = 10000

describe('min heap', () => {
    test(('sort'), () => {
        for (let t = 0; t < time; ++t) {
            const mh: MinHeap = new MinHeap()
            const input: number[] = data_NonSorted_Repeated(alpha, size)
            const heap_res: number[] = []
            input.forEach(e => mh.insert(e))

            for (let i = 0; i < input.length; ++i)
                heap_res.push(mh.extractMin())

            input.sort((a, b) => a - b)

            expect(
                heap_res.length == input.length &&
                heap_res.every((e, i) => e == input[i])
            ).toBe(true)

        }
    })
})

// 0
// 12
// 3456
// 7891011121314