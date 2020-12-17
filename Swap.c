#include<stdio.h>

void swap(int *a, int *b){
	int temp = *a;
	*a = *b;
	*b = temp;
}

void main(){
	int a = 10,
		b = 5;
		
	swap(&a, &b);	
	printf("a = %d\nb = %d\n", a, b);
	return 0;
} 
