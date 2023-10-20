#include <stdio.h>
#include <pthread.h>			// pthread 라이브러리를 사용하기 위해 필요한 헤더 파일
#include <stdlib.h>

void* runner(void* param);	// 스레드로 작동할 코드(함수)
int sum[4] = { 0 };

int main() {
	pthread_t tid[4];			// 스레드의 id를 저장할 정수형 변수
	pthread_attr_t attr;	// 스레드 정보를 담을 구조체

	pthread_attr_init(&attr);	// 디폴트 값으로 attr 초기화

	pthread_create(&tid[0], &attr, runner, "10000");
	pthread_create(&tid[1], &attr, runner, "20000");
	pthread_create(&tid[2], &attr, runner, "30000");
	pthread_create(&tid[3], &attr, runner, "40000");

	pthread_join(tid[0], NULL);
	pthread_join(tid[1], NULL);
	pthread_join(tid[2], NULL);
	pthread_join(tid[3], NULL);


//	pthread_create(&tid, &attr, calcThread, "100");	// calcThread 스레드 생성
	// calcThread 스레드는 커널에 의해 언젠가 스케줄되어 실행
//	pthread_join(tid, NULL);	// tid 번호의 스레드 종료를 기다림
//	printf("calcThread 스레드가 종료하였습니다.\n");
	printf("1에서 40000까지 4개의 스레드가 계산한 총 합은 %d\n", sum[0] + sum[1] + sum[2] + sum[3]);
}

void* runner(void* param) {
//	printf("calcThread 스레드가 실행을 시작합니다.\n");
	int to = atoi(param);
	int i;

	for (i = to - 9999; i <= to; i++) {	// 1에서 to까지 합계산
		sum[(to - 1) / 10000] += i;	// 전역 변수 sum에 저장
	}
}