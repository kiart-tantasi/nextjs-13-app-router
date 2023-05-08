import Link from "next/link";

export default function Page() {
  return (
    <div>
      <a href="/stream-ui">
        <b>Try Streaming UI</b>
      </a>
      <br />
      <br />
      <a href="/1/2/3">
        <b>Try Nested Layout</b>
      </a>
    </div>
  );
}
