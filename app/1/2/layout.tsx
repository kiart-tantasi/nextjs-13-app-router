import LayoutComponent from "@/components/LayoutComponent";
import getApiUrl from "@/utils/getApiUrl";

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
  return <LayoutComponent>{children}</LayoutComponent>;
}
