import { data_NonSorted_Repeated } from "util/data"
import { HeapSort } from "../HeapSort"

const alpha: number = 100
const size: number = 2000
const time = 10000

describe('min heap', () => {
    test(('sort'), () => {
        for (let t = 0; t < time; ++t) {
            const input: number[] = data_NonSorted_Repeated(alpha, size)
            const heap_res: number[] = HeapSort(input)

            input.sort((a, b) => a - b)

            expect(
                heap_res.length == input.length &&
                heap_res.every((e, i) => e == input[i])
            ).toBe(true)
        }
    })
})
