#include<stdio.h>

void swap(int *a, int *b){
	int temp = *a;
	*a = *b;
	*b = temp;
}

void arrPointer(int *a){
	int i;
	int *p;
	
	p = a;
	
	for(i = 0; i < 10; ++i)
		a[i] = i;
		
	for(i = 0; i < 10; ++i)
		printf("a[%d] = %d, p[%d] = %d\n", i, a[i], i, p[i]);
}

void main(){
	int i;
	int a[10];
//	int *p = &a[0] + 5;
	
	arrPointer(a);
	
	//swap(&a, &b);	
	//printf("a = %d\nb = %d\n", a, b);
	return 0;
} 
