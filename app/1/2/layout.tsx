import LayoutComponent from "@/app/@components/LayoutComponent";

async function getData() {
  const res = await fetch(
    "https://nextjs-13-kt.vercel.app/api/delay?time=4000",
    {
      cache: "no-store",
    }
  );
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
