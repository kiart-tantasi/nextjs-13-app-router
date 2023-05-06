"use client";

import { useEffect } from "react";

export default function LayoutComponent({
  children,
  id,
  data,
}: {
  children: React.ReactNode;
  id: number;
  data: string;
}) {
  useEffect(() => {
    console.log(`layout data: ${data}`);
  }, [data]);
  return (
    <div style={{ border: "1px solid black", padding: "10px 30px" }}>
      <h1>Layout {id}</h1>
      {children}
    </div>
  );
}
