import { getData } from "@/app/utils/getData";

export default async function ServerPage() {
  const data = await getData(8000);
  return (
    <div style={{ border: "1px solid black" }}>
      <h1 style={{ textAlign: "center" }}>
        Page is successfully rendered !
      </h1>
    </div>
  );
}
