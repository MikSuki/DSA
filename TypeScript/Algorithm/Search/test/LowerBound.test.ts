import { LowerBound_Iterative, LowerBound_Recursive } from '../LowerBound'
import { LinearLowerBound } from '../LinearSearch'
import { sorted_repeat } from 'util/data'


const alphabet_size = 100
const size = 100
const time = 100

describe('Lower Bound', () => {

    test('Iterative', () => {
        for (let i = 0; i < time; ++i) {
            const input: number[] = sorted_repeat(alphabet_size, size)
            const target: number = ~~(Math.random() * alphabet_size)
            for (let j = 0; j < time; ++j)
                expect(LowerBound_Iterative(input, target)).toBe(LinearLowerBound(input, target))
        }
    });

    test('Recursive', () => {
        for (let i = 0; i < time; ++i) {
            const input: number[] = sorted_repeat(alphabet_size, size)
            const target: number = ~~(Math.random() * alphabet_size)
            for (let j = 0; j < time; ++j)
                expect(LowerBound_Recursive(input, target, 0, input.length - 1)).toBe(LinearLowerBound(input, target))
        }
    });

});