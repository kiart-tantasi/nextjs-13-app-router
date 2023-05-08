// NOTE: make error and do not know why
export default function getApiUrl(path: string): string {
  return process.env.NODE_ENV === "production"
    ? `https://nextjs-13-kt.vercel.app${path}`
    : `http://localhost:3000${path}`;
}
