import { BinarySearch_Iterative, BinarySearch_Recursive } from './BinarySearch'
import { LinearSearch, LinearLowerBound } from './LinearSearch'
import { LowerBound_Iterative, LowerBound_Recursive } from './LowerBound'

let input: number[] = [1, 3, 5, 7]
let res: number[][] = []

// search
let TAG = 'BinarySearch'
let correct = true
for (let i = 0; i <= 10; ++i) {
  const arr: number[] = []
  arr.push(
    BinarySearch_Iterative(input, i),
    BinarySearch_Recursive(input, i, 0, input.length - 1),
    LinearSearch(input, i)
  )
  if (arr[0] != arr[1] || arr[1] != arr[2])
    correct = false
  res.push(arr)
}

console.log(`${TAG}: ${correct}`)
console.table(res)


// lower bound
TAG = 'LowerBound'
correct = true
input = [1, 2, 2, 3, 3, 3, 5, 5, 7, 7, 7, 7, 7, 9]
res = []
for (let i = 0; i <= 10; ++i) {
  const arr: number[] = []
  arr.push(
    LowerBound_Iterative(input, i),
    LowerBound_Recursive(input, i, 0, input.length - 1),
    LinearLowerBound(input, i)
  )
  if (arr[0] != arr[1] || arr[1] != arr[2])
    correct = false
  res.push(arr)
}

console.log(`${TAG}: ${correct}`)
console.table(res)

