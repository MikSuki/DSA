#include <stdio.h>

void swap(int *a, int *b){
	int temp = *a;
	*a = *b;
	*b = temp;
}

int main() {
	int a = 5, b = 10;
	printf("before: %d %d\n", a, b);
	swap(&a, &b);
	printf("after: %d %d\n", a, b);
	
//	 printf("name = %p\n", name);
//	 printf("&name[0] = %p\n", &name[0]);
//	 printf("name printed as %%s is %s\n",name);
//	 printf("*name = %c\n",*name);
//	 printf("name[0] = %c\n", name[0]);
    return 0;
}


