/** 
 * @description 0/1 knapsack problem
 * @Complexity O(|W| * C)
 * @param W weights
 * @param P profits
 * @param C capacity
 * @returns 
 */
export function knapsack(W: number[], P: number[], C: number): number {
    const n: number = W.length
    const dp: number[][] = new Array(n + 1).fill(0).map(() => new Array(C + 1).fill(0))

    for (let i = 1; i <= n; ++i) {
        const weight: number = W[i - 1]
        const profit: number = P[i - 1]

        for (let capacity = 1; capacity <= C; ++capacity) {
            if (capacity - weight < 0)
                dp[i][capacity] = dp[i - 1][capacity]
            else
                dp[i][capacity] = Math.max(
                    dp[i][capacity],
                    dp[i - 1][capacity - weight] + profit
                )
        }
    }

    return dp[n][C]
}