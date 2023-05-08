export default function LayoutComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ border: "1px solid black", padding: "10px 30px" }}>
      <h1>Layout</h1>
      {children}
    </div>
  );
}
