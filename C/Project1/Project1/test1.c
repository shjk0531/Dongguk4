#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>


int main()
{
	int num, cnt, result = 1;
	printf("�Ǽ��� ���� �Է��Ͻÿ�: ");
	scanf("%d", &num);
	printf("�ŵ� ���� Ƚ���� �Է��Ͻÿ�: ");
	scanf("%d", &cnt);

	for (int i = 0; i < cnt; i++)
	{
		result *= num;
	}

	printf("������� %d\n", result);


    return 0;
}