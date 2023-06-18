import { rand } from 'util/math'

/**
 * given a matrix and nodes
 * set nodes ot be a connected graph
 * 
 * random work approach
 * https://stackoverflow.com/questions/2041517/random-simple-connected-graph-generation-with-given-sparseness
 * 
 * @param G forest adjacency matrix
 * @param set nodes of current tree
 * @param extraEdge extra edges in spanning tree
 */
function connectedGraph(G: number[][], set: Set<number>, extraEdge = true) {
    /** number of nodes */
    const n: number = set.size
    /** unvisited nodes */
    const U: Set<number> = set
    /** visited nodes */
    const V: Set<number> = new Set()

    // -----------------------
    // construct spanning tree
    // -----------------------
    /** current number in U */
    let cur: number = rand(U)
    U.delete(cur)
    V.add(cur)
    while (U.size) {
        const next: number = rand(U)
        G[cur][next] = 1
        G[next][cur] = 1
        cur = next
        U.delete(cur)
        V.add(cur)
    }

    // -----------------------
    // random set edges
    // -----------------------
    if (extraEdge == false) return
    const edges: number = rand(n)
    for (let i = 0; i < edges; ++i) {
        const x: number = rand(V)
        const y: number = rand(V)
        G[x][y] = 1
        G[y][x] = 1
    }
}

/**
 * generate a forest with n trees with random edges
 * @param n number of nodes
 * @param size number of trees in forest
 */
export function forest(n: number, size: number): number[][] {
    const G: number[][] = new Array(n).fill(0).map(() => new Array(n).fill(0))
    const arr: number[] = Array.from({ length: n }, (_, i) => i)
    const sets: Set<number>[] = new Array(size).fill(0).map(() => new Set())
    let i: number = 0
    while (arr.length) {
        const idx: number = rand(arr.length)
        sets[i].add(arr[idx])
        arr.splice(idx, 1)
        if (++i >= size) i = 0
    }
    for (let i = 0; i < size; ++i)
        connectedGraph(G, sets[i])
    return G
}
