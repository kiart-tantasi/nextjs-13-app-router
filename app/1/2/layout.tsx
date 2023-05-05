import LayoutComponent from "@/components/LayoutComponent";

export default async function NestedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const res = await fetch("https://catfact.ninja/fact", {
    next: { revalidate: 1 },
  });
  await new Promise((res) => {
    setTimeout(res, 4000);
  });
  const data = await res.json();
  console.log(`data: ${JSON.stringify(data)}`);
  return <LayoutComponent id={2}>{children}</LayoutComponent>;
}
