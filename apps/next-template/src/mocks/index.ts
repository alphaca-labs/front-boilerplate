/**
 * 환경에 따라 MSW (Mock Service Worker)를 초기화합니다.
 * 코드가 서버 측에서 실행 중인 경우 서버 측 모킹을 가져와 시작합니다.
 * 코드가 클라이언트 측에서 실행 중인 경우 브라우저 측 모킹을 가져와 시작합니다.
 * @returns {Promise<void>} MSW가 초기화될 때 해결되는 프로미스입니다.
 */
export async function initBrowserMSW(): Promise<void> {
  if (typeof window !== "undefined") {
    console.log("browser");
    const { worker } = await import("@/mocks/browser");
    worker.start({
      onUnhandledRequest: "bypass",
    });
  }
}

export async function initNodeMSW(): Promise<void> {
  if (typeof window === "undefined") {
    console.log("node");
    const { server } = await import("@/mocks/node");
    server.listen();
  }
}
