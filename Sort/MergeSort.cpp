// external sort常用
// 	Avg   case: O(n * log(n))
// 	Worst case: O(n ** 2)
// 	stable

#include <stdio.h>
#include <stdlib.h>
#include <ZZZZZ.h>

#define LENGTH 100

void Merge(int [], int, int, int);
void MergeSort(int [], int, int);

int main(){
	int data[LENGTH];
	createArr(data, LENGTH);
	printArr(data, LENGTH);
	MergeSort(data, 0, sizeof(data) / sizeof(data[0]));	
	printArr(data, LENGTH);
	return 0;
}

void Merge(int data[], int l, int m, int r){
	int i, j, k,
		L_len = m - l + 1,
		R_len = r - m,
	    L[L_len],
		R[R_len];
		
	// copy L & R
	for(i = 0; i < L_len; ++i)
		L[i] = data[l + i];
	for(i = 0; i < R_len; ++i)
		R[i] = data[m + i + 1];
		
	// merge
	i = l; // array index
	j = 0; // L index
	k = 0; // R index
	while(j < L_len && k < R_len){
		if(L[j] <= R[k]){
			data[i] = L[j];
			++j;
		}	
		else{
			data[i] = R[k];
			++k;
		}	
		++i;
	}
	while(j < L_len){
		data[i] = L[j];
		++i;
		++j;
	}
	while(k < R_len){
		data[i] = R[k];
		++i;
		++k;
	}
}

void MergeSort(int data[], int l, int r){
	if(l >= r) return;
	int m = (l + r) / 2;
	MergeSort(data, l, m);
	MergeSort(data, m + 1, r);		
	Merge(data, l, m, r);
}
