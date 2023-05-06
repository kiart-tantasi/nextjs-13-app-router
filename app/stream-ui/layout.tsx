import LayoutComponent from "@/components/LayoutComponent";

async function getData() {
  const res = await fetch("https://catfact.ninja/fact", {
    cache: "no-store",
  });
  await new Promise(async (res) => {
    setTimeout(res, 2000);
  });
  return res.json();
}

export default async function NestedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getData();
  return <LayoutComponent>{children}</LayoutComponent>;
}
