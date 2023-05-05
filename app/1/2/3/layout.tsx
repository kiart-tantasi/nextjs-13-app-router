import LayoutComponent from "@/components/LayoutComponent";
import { getData } from "@/utils/getData";

export default async function NestedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getData(6000);
  console.log(`data: ${data}`);
  return <LayoutComponent id={3}>{children}</LayoutComponent>;
}
