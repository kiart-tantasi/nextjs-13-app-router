async function getData() {
  const host = "https://nextjs-13-kt.vercel.app";
  const res = await fetch(`${host}/api/delay?time=5000`, {
    cache: "no-store",
  });
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
