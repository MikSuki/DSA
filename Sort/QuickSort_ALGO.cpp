#include <stdio.h>
#include <stdlib.h>
#include <ZZZZZ.h>

#define LENGTH 100

int Partition(int [], int, int);
int QuickSort(int [], int, int);

int main(){
	int data[LENGTH];
	createArr(data, LENGTH);
	printArr(data, LENGTH);
	QuickSort(data, 0, sizeof(data) / sizeof(data[0]));	
	printArr(data, LENGTH);
	return 0;
}

int Partition(int data[], int l, int r){
	int i = l - 1,
		pivot = data[r - 1];
		
	for(int j = l; j < r-1; ++j){
		if(data[j] <= pivot){
			++i;
			SWAP(&data[i], &data[j]);
		}
	}
	SWAP(&data[i+1], &data[r-1]);
	return i+1;
}

int QuickSort(int data[], int l, int r){
	if(l >= r) return 0;
	int j = Partition(data, l, r);
	QuickSort(data, l, j-1);
	QuickSort(data, j+1, r);		
}
