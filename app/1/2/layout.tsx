import getApiUrl from "@/app/@utils/getApiUrl";

async function getData() {
  const res = await fetch(getApiUrl("/api/delay?time=4000"), {
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
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div style={{ width: "40%", borderRight: "1px solid white" }}>
        <h2>My Profile</h2>
        <h2>Setting</h2>
        <h2>Payment History</h2>
      </div>
      <div style={{}}>{children}</div>
    </div>
  );
}
