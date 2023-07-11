/**
 * Monte Carlo 求 π
 *
 * 隨機生成n個點，在看是否落在圓裡面
 * 
 */

const TIME: number[] = [100, 1000, 10000, 100000, 1000000, 10000000, 100000000]
const N: number = 100
const R: number = N / 2

for (const time of TIME) {
    let hit: number = 0

    for (let i = 0; i < time; ++i) {
        const x: number = Math.random() * (N+1)
        const y: number = Math.random() * (N+1)
        if (Math.sqrt((x - R) ** 2 + (y - R) ** 2) <= R)
            ++hit
    }
    // (r^2 * pi) / N^2  
    // = (r^2 * pi) / ((2r)^2) 
    // = (r^2 * pi) / (4r^2)
    // = hit / time 
    // -> pi = hit / time * 4
    
    console.log(`${time} time, pi = ${hit / time * 4}`)
}

