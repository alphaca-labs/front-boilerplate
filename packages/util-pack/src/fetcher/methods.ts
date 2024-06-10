import { fetcher } from "./fetcher";
import { HttpMethods, HttpResponse, RequestOptions } from "./fetcher.type";

function addMethod(
  fetcher: <SuccessBody, FailureBody = unknown>(
    url: string,
    options: RequestOptions
  ) => Promise<HttpResponse<SuccessBody, FailureBody>>,
  method: HttpMethods
) {
  return <SuccessBody, FailureBody = unknown>(
    url: string,
    options?: RequestOptions
  ) => fetcher<SuccessBody, FailureBody>(url, { ...options, method });
}

const get = addMethod(fetcher, HttpMethods.GET);
const put = addMethod(fetcher, HttpMethods.PUT);
const post = addMethod(fetcher, HttpMethods.POST);
const del = addMethod(fetcher, HttpMethods.DELETE);

export { del, get, post, put };
