/**
 * generate non-repeated sorted data
 * @param start first value
 * @param gap range of random increment 
 * @param size size of data
 * @returns 
 */
export function sorted_nonRepeat(start: number, gap: number, size: number): number[] {
    const arr: number[] = []
    let cur = start

    for (let i = 0; i < size; ++i){
        cur += ~~(Math.random() * gap) + 1
        arr.push(cur)
    }
    return arr
}

/**
 * generate repeated sorted data
 * @param alphabet_size maximum of data
 * @param size size of data
 * @returns 
 */
export function sorted_repeat(alphabet_size: number, size: number): number[] {
    const arr: number[] = []

    for (let i = 0; i < size; ++i)
        arr.push(~~(Math.random() * alphabet_size))
    arr.sort((a, b) => a - b)
    return arr
}
