// 選出pivot排序
// 	Avg   case: O(n * log(n))
// 	Worst case: O(n ** 2)
//		solution: (1) middle-of-three
//				  (2) randomized-quicksort
//				  (2) median-of-median
// 	unstable


#include <stdio.h>
#include <stdlib.h>
#include <ZZZZZ.h>

#define LENGTH 20

int QuickSort(int *data, int l, int r){
	if(l >= r) return 0;
	int i = l,
		j = r + 1,
		pivot = data[l];
		
	do{
		do {++i;} while(data[i] < pivot);
		do {--j;} while(data[j] > pivot);
		if(i < j) SWAP(&data[i], &data[j]);
	}while(i < j);
	SWAP(&data[l], &data[j]);
	QuickSort(data, l, j-1);
	QuickSort(data, j+1, r);		
}

int main(){
	int data[LENGTH];
	createArr(data, LENGTH);
	printArr(data, LENGTH);
	QuickSort(data, 0, sizeof(data) / sizeof(data[0]));	
	printArr(data, LENGTH);
	return 0;
}

