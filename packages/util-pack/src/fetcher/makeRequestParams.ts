import { getBaseUrl } from "./baseUrlManager";
import { RequestOptions } from "./fetcher.type";

function makeRequestParams(
  apiUrl: string,
  {
    useEnvUrl,
    useBodyAsRaw,
    body,
    headers: customHeaders,
    retryable: _,
    ...rest
  }: RequestOptions,
): [string, RequestInit | undefined] {
  const baseUrl: string = useEnvUrl ? getBaseUrl() : "";

  if (useEnvUrl && !baseUrl) {
    throw new Error(
      "Insufficient environment variables in `.env.*` files\n- API_URI_BASE",
    );
  }

  const requestUrl: string = baseUrl + apiUrl;

  const headers = {
    ...customHeaders,
    ...(!!body && !useBodyAsRaw && { "content-type": "application/json" }),
  };

  return [
    requestUrl,
    {
      credentials: "same-origin",
      headers,
      body: body
        ? useBodyAsRaw
          ? (body as BodyInit)
          : JSON.stringify(body)
        : undefined,
      ...rest,
    },
  ];
}

export default makeRequestParams;
