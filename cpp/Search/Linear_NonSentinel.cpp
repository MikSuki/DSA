// O(n)

#include <stdio.h>
#include <stdlib.h>

int main(){
	int i;
	int find = 7;
	int data[] = {1, 10, 8, 4, 7, 6, 3, 2, 9};
	int arr_size = sizeof(data) / sizeof(data[0]);
	
	for(i = 0; i < arr_size; i++)
		if(data[i] == find) break;
	printf("%d", i >= arr_size ? -1 : i);
	return 0;
}
