#include <stdio.h>
void reverseSentence(char*);
int main() {
	char s[] = "Enter a sentence: ";
    reverseSentence(s);
    return 0;
}

void reverseSentence(char *s) {
//	printf("%c", *s);
	if (*s) {
        reverseSentence(s+1);
        printf("%c", *s);
    }
    
}
