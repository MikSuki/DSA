// 第i筆插入到前面(i-1)筆sorted的data中
// 	Avg  case: O(n ** 2)
// 	Best case: O(n)
// 	stable
// 變形:
//	(1) Binary: 使用binary search，比較次數減到O(log(n))
//	(2) Linear: 使用link list，插入時間減到O(1)

#include <stdio.h>
#include <stdlib.h>
#include <ZZZZZ.h>

#define LENGTH 20

int InsertSort(int *data, int len){
	for(int i = 1; i < len; ++i){
		int temp = data[i];
		int j = i - 1;
		while(temp < data[j]){
			data[j + 1] = data[j];
			--j;
		}
		data[j + 1] = temp;
	}
}

int main(){
	int data[LENGTH];
	createArr(data, LENGTH);
	printArr(data, LENGTH);
	InsertSort(data, sizeof(data) / sizeof(data[0]));	
	printArr(data, LENGTH);
	return 0;
}

