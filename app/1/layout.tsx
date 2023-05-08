import LayoutComponent from "@/components/LayoutComponent";
// import getApiUrl from "@/utils/getApiUrl";

async function getData() {
  const res = await fetch(`https://nextjs-13-kt.vercel.app/delay?time=2000`, {
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
