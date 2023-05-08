export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          boxSizing: "border-box",
          margin: 0,
        }}
      >
        {children}
      </body>
    </html>
  );
}
