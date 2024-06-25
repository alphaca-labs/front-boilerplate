export const fetcher = async (url: string) => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("Fetch error:", text); // 에러 로그 추가
    throw new Error("Network response was not ok");
  }

  return res.json();
};

export default async function Home() {
  try {
    const data = await fetcher("https://example.com/user");
    console.log(data);
    return (
      <div>
        <h1>Home</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error); // 에러 로그 추가
    return (
      <div>
        <h1>Home</h1>
        <p>Error fetching data.</p>
      </div>
    );
  }
}
