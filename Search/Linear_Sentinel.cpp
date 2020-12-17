// O((n+1) / 2)
// array需多一格

#include <stdio.h>
#include <stdlib.h>

int LS(int *, int, int);

int main()
{
	int find = 7;
	int data[] = {-1, 1, 10, 8, 4, 7, 6, 3, 2, 9};
	int arr_size = sizeof(data) / sizeof(data[0]);

	printf("%d", LS(data, find, arr_size));
	return 0;
}

int LS(int *data, int find, int len)
{
	int i = len - 1;
	data[0] = find;
	i = len - 1;
	while (data[i] != find)
	{
		--i;
	}
	if (i == 0)
		return -1;
	else
		return i;
}
