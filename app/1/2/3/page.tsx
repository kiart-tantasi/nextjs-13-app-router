async function getData() {
  const res = await fetch(
    "https://nextjs-13-kt.vercel.app/api/delay?time=8000",
    {
      cache: "no-store",
    }
  );
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return (
    <div style={{ border: "1px solid black", textAlign: "center" }}>
      <h1 style={{ textAlign: "center" }}>Page is successfully rendered !</h1>
      <p style={{ fontSize: "10px" }}>page data: {JSON.stringify(data)}</p>
    </div>
  );
}
