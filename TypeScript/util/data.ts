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

/**
 * generate non-repeated non-sorted data
 * @param alphabet_size maximum of data
 * @param size size of data
 * @returns 
 */
export function nonSorted_nonRepeat(alphabet_size: number, size: number): number[] {
    const arr: number[] = []

    for (let i = 0; i < size; ++i)
        arr.push(~~(Math.random() * alphabet_size))
    return arr
}

/**
 * check if the input sequence is sorted
 * @param input 
 * @returns 
 */
export function isSorted(input: number[]): boolean{
    console.log(input)
    for(let i = 1; i < input.length; ++i)
        if(input[i] < input[i - 1]) return false
    return true
}

/**
 * check if two input are same
 * @param a 
 * @param b 
 * @returns 
 */
export function isSame(a: number | number[], b: number | number[]){
    if(typeof a == 'number' && typeof b == 'number'){
        return a == b
    }
    if(a instanceof Array && b instanceof Array){
        if(a.length != b.length) return false
        for(let i = 0; i < a.length; ++i)
            if(isSame(a[i], b[i]) == false)
                return false
        return true
    }
    throw "type error"
}