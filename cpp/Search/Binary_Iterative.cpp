// Best  case: O(log(n))
// Worst case: O(n)  

#include <stdio.h>
#include <stdlib.h>

int BS(int *, int, int);

int main(){
	int data[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
	int find = 9;
	int arr_size = sizeof(data) / sizeof(data[0]);
	int index = BS(data, find, arr_size);
	
	printf("%d", index);
	return 0;
}

int BS(int *data, int find, int length){
	int i;
	int l = 0, r = length - 1;
	
	while(l <= r){
		int m = (l + r) / 2;
		if(data[m] == find) return m;
		else if(data[m] > find) r = m - 1;
		else l = m + 1;
	}
	return -1;
}
