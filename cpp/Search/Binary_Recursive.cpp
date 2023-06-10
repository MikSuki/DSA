// Best  case: O(log(n))
// Worst case: O(n)  

#include <stdio.h>
#include <stdlib.h>

int BS(int *, int, int, int);

int main(){
	int data[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
	int find = 1;
	int arr_size = sizeof(data) / sizeof(data[0]);
	int index = 
			BS(
				data, 
				find, 
				0, 
				arr_size - 1
			);
	
	printf("%d", index);
	return 0;
}

int BS(int *data, int find, int l, int r){
	int i;
	
	if(l <= r){
		int m = (l + r) / 2;
		if(data[m] == find) return m;
		else if(data[m] > find) return BS(data, find, l, m - 1);
		else return BS(data, find, m + 1, r);
	}
	return -1;
}
