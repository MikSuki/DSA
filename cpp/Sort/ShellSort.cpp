// i跟i+n/(2 ** step)比較，i>j則swap
// 	Avg  case: O(n ** 2)
// 	Best case: O(n ** 3/2)
// 	unstable

#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <ZZZZZ.h>

#define LENGTH 20
#define SPAN_DIVIDE 2

int ShellSort(int *data, int len){
	int span = round((float)len / (float)SPAN_DIVIDE);
	int flag = 1;
	while(span >= 1 && flag){
		if(span == 1) flag = 0;
		
		int i = 0;
		printf("%d\n", span);
		while(i <= span){
			if(data[i] > data[i + span]) SWAP(&data[i], &data[i + span]);
			++i;
		}
		span = round((float)span / (float)SPAN_DIVIDE);
	}
}

int main(){
	int data[LENGTH];
	createArr(data, LENGTH);
	printArr(data, LENGTH);
	ShellSort(data, sizeof(data) / sizeof(data[0]));	
	printArr(data, LENGTH);
	return 0;
}

