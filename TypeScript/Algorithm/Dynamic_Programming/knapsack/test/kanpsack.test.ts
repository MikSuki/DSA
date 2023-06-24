import {knapsack} from '../knapsack'

describe('knapsack', () => {
    test('1.', () => {
        const W: number[] = [10, 3, 5]
        const P: number[] = [40, 20, 30]
        const C: number = 10
        expect(knapsack(W, P, C)).toBe(50)
    })

    test('2.', () => {
        const W: number[] = [3, 4, 5]
        const P: number[] = [30, 50, 60]
        const C: number = 8
        expect(knapsack(W, P, C)).toBe(90)
    })

})
