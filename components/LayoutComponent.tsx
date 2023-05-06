export default function LayoutComponent({
  children,
  id,
}: {
  children: React.ReactNode;
  id: number;
}) {
  return (
    <div style={{ border: "1px solid black", padding: "10px 30px" }}>
      <h1>Layout {id}</h1>
      {children}
    </div>
  );
}
