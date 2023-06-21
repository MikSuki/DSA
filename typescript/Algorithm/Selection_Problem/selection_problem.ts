// 五個為一組
const division: number = 5

export function findKth(input: number[], k: number): number {
    if (k > input.length) throw ('out of range')

    // 數量太少直接排序解
    if (input.length <= division) {
        input.sort((a, b) => a - b)
        return input[k - 1]
    }

    // -------------------------------------
    // step.1: 分成多組
    // -------------------------------------
    const groups: number[][] = []
    for(let i = 0; i < input.length / division; ++i){
        const group: number[] = input.slice(i, i + division)
        groups.push(group)
    }
    
    // -------------------------------------
    // step.2: 用每組的median找input的median p
    // -------------------------------------
    const medians: number[] = groups.map(group => findKth(group, division >> 1))
    /** median of input */
    let p: number
    if (medians.length == 1) 
        p = medians[0]
    else
        p = findKth(medians, medians.length >> 1)
   
    // -------------------------------------
    // step.3 分成3組: < p, = p和 > p，
    //        然後丟掉不可能的部分，再繼續去找剩下的
    // -------------------------------------
    /** less than p */
    const S1: number[] = []
    /** equal to p */
    const S2: number[] = []
    /** greater than p */
    const S3: number[] = []
    input.forEach(e => {
        if (e < p) S1.push(e)
        else if (e == p) S2.push(e)
        else S3.push(e)
    })
    if (S1.length >= k) return findKth(S1, k)
    if (S1.length + S2.length >= k) return p
    return findKth(S3, k - S1.length - S2.length)
}
