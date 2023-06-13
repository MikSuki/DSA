export function randomData_nonRepeat(gap: number, size: number): number[] {
    const arr: number[] = []
    let cur = -1

    for (let i = 0; i < size; ++i){
        cur += ~~(Math.random() * gap) + 1
        arr.push(cur)
    }
    return arr
}

export function randomData_reapeated(alphabet_size: number, size: number): number[] {
    const arr: number[] = []

    for (let i = 0; i < size; ++i)
        arr.push(~~(Math.random() * alphabet_size))
    arr.sort((a, b) => a - b)
    console.log(arr)
    return arr
}
