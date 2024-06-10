export const enum HttpMethods {
  GET = "GET",
  POST = "POST",
  DELETE = "DELETE",
  PUT = "PUT",
  PATCH = "PATCH",
}

export type RequestOptions = Omit<RequestInit, "body"> & {
  retryable?: boolean;
  // useBodyAsRaw는 body를 그대로 사용할지 여부를 결정합니다.
  // FormData, Blob, ArrayBuffer 등을 사용할 때 true로 설정합니다.
  useBodyAsRaw?: boolean;
  body?: unknown;
  useEnvUrl?: boolean;
};

export type HttpResponse<SuccessBody, FailureBody = unknown> = Pick<
  Response,
  "headers" | "ok" | "status" | "url"
> &
  SuccessOrFailureBody<SuccessBody, FailureBody>;

export type SuccessOrFailureBody<SuccessBody, FailureBody> =
  | { ok: true; parsedBody: SuccessBody }
  | { ok: false; parsedBody: FailureBody };
