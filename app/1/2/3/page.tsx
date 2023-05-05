export default async function ServerPage() {
  const res = await fetch("https://catfact.ninja/fact", {
    next: { revalidate: 1 },
  });
  await new Promise((res) => {
    setTimeout(res, 8000);
  });
  const data = await res.json();
  console.log(`data: ${JSON.stringify(data)}`);
  return (
    <div style={{ border: "1px solid black" }}>
      <h1 style={{ textAlign: "center" }}>Page is successfully rendered !</h1>
    </div>
  );
}
