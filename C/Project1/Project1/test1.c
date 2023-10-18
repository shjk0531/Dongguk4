#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>


int main()
{
	int num, cnt, result = 1;
	printf("실수의 값을 입력하시오: ");
	scanf("%d", &num);
	printf("거듭 제곱 횟수를 입력하시오: ");
	scanf("%d", &cnt);

	for (int i = 0; i < cnt; i++)
	{
		result *= num;
	}

	printf("결과값은 %d\n", result);


    return 0;
}