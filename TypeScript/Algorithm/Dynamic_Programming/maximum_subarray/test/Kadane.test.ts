import { Kadane } from '../Kadane'

describe('Kadane', () => {
    test('1.', () => {
        const input: number[] = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
        expect(Kadane(input)).toBe(6)
    })
})
