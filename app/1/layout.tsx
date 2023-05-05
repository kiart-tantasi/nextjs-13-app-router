import LayoutComponent from "@/app/components/LayoutComponent";
import { getData } from "@/app/utils/getData";

export default async function NestedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getData(2000);
  console.log(`data: ${data}`);
  return <LayoutComponent id={1}>{children}</LayoutComponent>;
}
