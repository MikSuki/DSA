// 兩兩比較，i>j則swap
// 	Avg  case: O(n ** 2)
// 	Best case: O(n) -> add flag
// 	stable

#include <stdio.h>
#include <stdlib.h>
#include <ZZZZZ.h>

#define LENGTH 20

int BubbleSort(int *data, int len){
	for(int i = 0; i < len; ++i){
		for(int j = 0; j < len - i; ++j){
			if(data[j] > data[j + 1])
				// add flag 
				SWAP(&data[j], &data[j + 1]);
		}
	}
}

int main(){
	int data[LENGTH];
	createArr(data, LENGTH);
	printArr(data, LENGTH);
	BubbleSort(data, sizeof(data) / sizeof(data[0]));	
	printArr(data, LENGTH);
	return 0;
}


