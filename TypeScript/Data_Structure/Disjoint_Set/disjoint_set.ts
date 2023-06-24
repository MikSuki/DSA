/**
 * - Disjoint-set 是用來處理沒有重複元素的問題，
 *   其中包含了Find和Union
 *   
 * - 路徑壓縮(path compression)
 *      每次Find時，把經過的node之parent設為root
 *      藉此減少樹的高度
 * 
 * - Time Complexity
 *      MakeSet: O(1)
 *      Find: O(α(n))
 *      Union: O(α(n))
 */

export class Node<T> {
    public parent: Node<T>
    public size: number
    private data: T

    constructor(data: T) {
        this.parent = this
        this.size= 1
        this.data = data
    }
}

export class DisjointSet<T> {

    public MakeSet(data: T) {
        return new Node(data)
    }

    public Find(x: Node<T>): Node<T> {
        if (x.parent != x)
            x.parent = this.Find(x.parent)
        return x.parent
    }

    public Union(x: Node<T>, y: Node<T>) {
        let root1: Node<T> = this.Find(x)
        let root2: Node<T> = this.Find(y)
        if(root1 == root2) return 

        if(root2.size > root1.size)
            [root1, root2] = [root2, root1]
       
        root2.parent = root1
        root1.size += root2.size
        root2.size = 0
    }
}