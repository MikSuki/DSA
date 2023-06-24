import { rand } from '../math'

const V: number = 1000
const lowerBound: number = 0
const upperBound: number = V - 1
const time: number = 10000
const FLAG = {
    rand: {
        number: false,
        set: true
    }
}

describe('Math.rand', () => {

    if (FLAG.rand.number) {
        test('number in range [0, n-1]', () => {
            const arr: number[] = new Array(V).fill(0)
            for (let i = 0; i < time; ++i) {
                const v: number = rand(V)
                ++arr[v]
                expect(Number.isInteger(v) && v >= lowerBound && v <= upperBound).toBe(true)
            }
            console.table(arr)
        });
    }

    if (FLAG.rand.set) {
        test('set', () => {
            const set: Set<number> = new Set<number>()
            for (let i = 0; i < V / 3; ++i)
                set.add(rand(V))
            for(let i = 0; i < time; ++i)
                expect(set.has(rand(set))).toBe(true)
        })

    }
});