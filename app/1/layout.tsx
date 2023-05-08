import getApiUrl from "../@utils/getApiUrl";

async function getData() {
  const res = await fetch(getApiUrl("/api/delay?time=2000"), {
    cache: "no-store",
  });
  return res.json();
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getData();
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        fontSize: "10px",
        backgroundColor: "grey",
        color: "white",
      }}
    >
      {/* top nav */}
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          borderBottom: "1px solid white",
        }}
      >
        <h1 style={{ marginRight: "20px" }}>HOME</h1>
        <h1 style={{ marginRight: "20px" }}>PRODUCTS</h1>
        <h1 style={{ marginRight: "20px" }}>ABOUT US</h1>
      </div>
      {/* content */}
      <div style={{ width: "100%", height: "100%" }}>{children}</div>
    </div>
  );
}
