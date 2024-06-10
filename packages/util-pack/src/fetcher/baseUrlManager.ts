const createBaseUrlManager = () => {
  let baseUrl: string = "";

  return {
    setBaseUrl(url: string): void {
      baseUrl = url;
    },
    getBaseUrl(): string {
      return baseUrl;
    },
  };
};

const { getBaseUrl, setBaseUrl } = createBaseUrlManager();

export { getBaseUrl, setBaseUrl };
