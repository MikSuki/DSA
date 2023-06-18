/**
 * return random integer in [0, n)
 * @param n 
 * @returns 
 */
export function rand(input: number | Set<number>): number {
    if (typeof input == 'number')
        return ~~(Math.random() * input)
    if (input instanceof Set) {
        const arr = Array.from(input)
        return arr[rand(arr.length)]
    }
    return -1
}