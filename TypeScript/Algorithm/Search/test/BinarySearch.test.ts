import { BinarySearch_Iterative, BinarySearch_Recursive } from '../BinarySearch'
import { LinearSearch } from '../LinearSearch'
import { sorted_nonRepeat } from 'util/data'


const start = -1
const gap = 5
const alphabet_size = 100
const size = 100
const time = 100

describe('Binary Search', () => {

    test('Iterative', () => {
        for (let i = 0; i < time; ++i) {
            const input: number[] = sorted_nonRepeat(start, gap, size)
            const target: number = ~~(Math.random() * alphabet_size)
            for (let j = 0; j < time; ++j)
                expect(BinarySearch_Iterative(input, target)).toBe(LinearSearch(input, target))
        }
    });

    test('Recursive', () => {
        for (let i = 0; i < time; ++i) {
            const input: number[] = sorted_nonRepeat(start, gap, size)
            const target: number = ~~(Math.random() * alphabet_size)
            for (let j = 0; j < time; ++j)
                expect(BinarySearch_Recursive(input, target, 0, input.length - 1)).toBe(LinearSearch(input, target))
        }
    });

});