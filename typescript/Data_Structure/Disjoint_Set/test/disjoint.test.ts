import { Node, DisjointSet } from '../disjoint_set'
import { forest } from 'util/graph'

const n: number = 100
const size: number = 100
const time: number = 100


describe('Disjoint Set', () => {

    test('random graph', () => {
        for (let k = 1; k <= n; ++k) {
            const size: number = k
            const G: number[][] = forest(n, size)
            const disjoint: DisjointSet<number> = new DisjointSet<number>()
            const nodes: Node<number>[] = Array.from({ length: n }, (_, i) => disjoint.MakeSet(i))
            for (let i = 0; i < n; ++i)
                for (let j = 0; j < n; ++j)
                    if (G[i][j])
                        disjoint.Union(nodes[i], nodes[j])
            const sum: number = nodes.reduce((acc, node) => acc += node.size == 0 ? 0 : 1, 0)
            expect(sum).toBe(size)
        }
    });

});