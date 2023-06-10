// 從第i到第n筆找出最小值，並和第i筆swap，所以swap只需一次
// 	Avg  case: O(n ** 2)
// 	Best case: O(n ** 2)
// 	unstable

#include <stdio.h>
#include <stdlib.h>
#include <ZZZZZ.h>

#define LENGTH 20

int SelectionSort(int *data, int len){
	for(int i = 0; i < len - 1; ++i){
		int min_index = i;
		for(int j = i + 1; j < len; ++j){
			if(data[j] < data[min_index]) min_index = j;
		}
		SWAP(&data[i], &data[min_index]);
	}
}

int main(){
	int data[LENGTH];
	createArr(data, LENGTH);
	printArr(data, LENGTH);
	SelectionSort(data, sizeof(data) / sizeof(data[0]));
	printArr(data, LENGTH);
	return 0;
}

