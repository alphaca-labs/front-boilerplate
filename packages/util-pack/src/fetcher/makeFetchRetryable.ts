const refetchStatuses = [502, 503, 504];

function isRetryable(status: number, remainRetry: number): boolean {
  return remainRetry > 0 && refetchStatuses.includes(status);
}

async function retryer(
  url: string,
  requestInit: RequestInit | undefined,
  remainRetry: number,
  retryCount: number
): Promise<Response> {
  const response = await fetch(url, requestInit);

  if (!isRetryable(response.status, remainRetry)) {
    return response;
  }

  const jitterDelay = Math.random() + 1;
  await new Promise((resolve) =>
    setTimeout(
      resolve,
      // 지수 백오프를 적용하여 재시도 간격을 늘립니다.
      100 * (Math.pow(2, retryCount - remainRetry) + jitterDelay)
    )
  );

  return retryer(url, requestInit, remainRetry - 1, retryCount);
}

function makeFetchRetryable(retryCount: number = 3) {
  // retryable한 fetch 함수를 반환합니다.
  return (url: string, requestInit?: RequestInit): Promise<Response> =>
    retryer(url, requestInit, retryCount, retryCount);
}

export default makeFetchRetryable;
