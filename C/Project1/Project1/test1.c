#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int main()
{
	int x, y;
	char a;

	scanf("%d, %d, %c", &x, &y, &a);

	switch (a)
	{
	case '*':
		printf("%d %c %d = %d", x, a, y, (x * y));
	case '+':
		printf("%d %c %d = %d", x, a, y, x + y);
	case '-':
		printf("%d %c %d = %d", x, a, y, x - y);
	case '/':
		printf("%d %c %d = %d", x, a, y, x / y);
	case '%':
		printf("%d %c %d = %d", x, a, y, x % y);
	default:
		break;
	}


	return 0;
}