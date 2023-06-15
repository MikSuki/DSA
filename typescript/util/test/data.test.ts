
import { sorted_nonRepeat, sorted_repeat } from 'util/data'

const start = -1
const gap = 5
const alphabet_size = 100
const size = 100
const time = 100

describe('Generate sorted data', () => {

    test('non repeat', () => {
        for (let i = 0; i < time; ++i) {
            const input: number[] = sorted_nonRepeat(start, gap, size)
            for (let j = 1; j < input.length; ++j)
                expect(input[j] != input[j - 1]).toBe(true)
        }
    });

    test('repeat', () => {
        for (let i = 0; i < time; ++i) {
            const input: number[] = sorted_repeat(alphabet_size, size)
            for (let j = 1; j < input.length; ++j)
                expect(input[j] >= input[j - 1]).toBe(true)
        }
    });

});