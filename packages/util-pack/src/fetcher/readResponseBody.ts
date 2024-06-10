async function safeParseJson(response: Response): Promise<unknown> {
  try {
    const json = await response.json();
    return json;
  } catch (error) {
    return undefined;
  }
}

function readResponseBody(response: Response) {
  const contentType = response.headers.get("content-type");
  const jsonParseAvailable = contentType && /json/.test(contentType);

  if (jsonParseAvailable) {
    return safeParseJson(response);
  }

  return response.text();
}

export default readResponseBody;
