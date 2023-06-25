import {insertionSort} from "../insertion_sort"
import {data_Sorted_Repeated, isSame} from "util/data" 

const alpha: number = 1000
const size: number = 1000
const time: number = 1000

describe('insertion sort', () => {
   test('zz', () => {
        for(let i = 0; i < time; ++i){
            const data1 = data_Sorted_Repeated(alpha, size)
            const data2 = data1.slice()
            insertionSort(data1)
            data2.sort((a, b) => a - b)
            expect(isSame(data1, data2)).toBe(true)
        }
   }) 
})
