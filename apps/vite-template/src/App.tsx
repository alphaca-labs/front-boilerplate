import { Button } from "@/components/Button";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:5173/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response: ApiResponse) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  });
  return (
    <>
      hello alphaca labs
      <Button />
    </>
  );
}

export default App;
