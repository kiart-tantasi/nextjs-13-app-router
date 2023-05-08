import getApiUrl from "@/app/@utils/getApiUrl";

async function getData() {
  const res = await fetch(getApiUrl("/api/delay?time=6500"), {
    cache: "no-store",
  });
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Page is successfully rendered !</h2>
    </div>
  );
}
