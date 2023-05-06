async function getData() {
  const res = await fetch("https://catfact.ninja/fact", {
    cache: "no-store",
  });
  await new Promise(async (res) => {
    setTimeout(res, 6000);
  });
  return res.json();
}

export default async function ServerPage() {
  const data = await getData();
  return (
    <div style={{ border: "1px solid black", textAlign: "center" }}>
      <h1 style={{ textAlign: "center" }}>Page is successfully rendered !</h1>
      <p style={{ fontSize: "10px" }}>page data: {JSON.stringify(data)}</p>
    </div>
  );
}
