import LayoutComponent from "@/components/LayoutComponent";

async function getData() {
  await new Promise(async (res) => {
    setTimeout(res, 2000);
  });
  return "mock";
}

export default async function NestedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getData();
  return <LayoutComponent id={1}>{children}</LayoutComponent>;
}
