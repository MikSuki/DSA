import { findKth } from "../selection_problem"
import { nonSorted_nonRepeat } from "util/data"

const n: number = 100
const alphabet: number = 100
const time: number = 1000

describe('Selection problem', () => {
    test('correctness', () => {
        for (let k = 0; k < time; ++k) {
            const data: number[] = nonSorted_nonRepeat(alphabet, n)
            const sorted_data = data.slice().sort((a, b) => a - b)
            for (let i = 1; i <= n; ++i) {
                expect(findKth(data, i)).toBe(sorted_data[i - 1])
            }
        }
    })
})

