class Node<T> {
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

        if(root2.size > root1.size)
            [root1, root2] = [root2, root1]

        root2.parent = root1
        root1.size += root2.size
    }
}