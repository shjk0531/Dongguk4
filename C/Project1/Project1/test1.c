#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <stdlib.h>
	

int main()
{
    int n, i, j, cnt = 0;
    scanf("%d", &n);

    for (i = 1; i <= n; i++) {
        for (j = 1; j <= i; j++) {
            cnt++;
            printf("%d ", cnt);
        }
        printf("\n");
    }

    for (i = n; i >= 0; i--) {
        for (j = 1; j < i; j++) {
            cnt++;
            printf("%d ", cnt);
        }
        printf("\n");
    }


    return 0;
}