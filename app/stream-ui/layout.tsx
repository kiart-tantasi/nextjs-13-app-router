import LayoutComponent from "@/components/LayoutComponent";

async function getData() {
  const host = "https://nextjs-13-kt.vercel.app";
  const res = await fetch(`${host}/api/delay?time=2000`, {
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
  return <LayoutComponent>{children}</LayoutComponent>;
}
