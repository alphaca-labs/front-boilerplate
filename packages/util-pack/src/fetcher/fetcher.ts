import { HttpMethods, HttpResponse, RequestOptions } from "./fetcher.type";
import makeFetchRetryable from "./makeFetchRetryable";
import makeRequestParams from "./makeRequestParams";
import readResponseBody from "./readResponseBody";

export async function fetcher<SuccessBody, FailureBody = unknown>(
  url: string,
  options: RequestOptions,
): Promise<HttpResponse<SuccessBody, FailureBody>> {
  const { retryable, method = HttpMethods.GET } = options;

  // fetch 함수를 retryable 옵션에 따라 변경합니다.
  // GET 메서드이고 retryable 옵션이 true인 경우에만 retryableFetch 함수를 사용합니다.
  // 그 외의 경우에는 기본 fetch 함수를 사용합니다.
  const fetchFunction =
    method === HttpMethods.GET && retryable ? makeFetchRetryable() : fetch;

  const response = await fetchFunction(...makeRequestParams(url, options));
  const body = await readResponseBody(response);

  const { headers, status, url: responseUrl } = response;

  if (response.ok === true) {
    return {
      headers,
      status,
      url: responseUrl,
      ok: true,
      parsedBody: body as SuccessBody,
    };
  }

  return {
    headers,
    status,
    url: responseUrl,
    ok: false,
    parsedBody: body as FailureBody,
  };
}
