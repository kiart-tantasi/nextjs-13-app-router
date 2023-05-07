import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const paramsString: string | undefined = req.url.split("?")[1];
  const params: URLSearchParams = new URLSearchParams(paramsString);
  const queryParamTime: string | null = params.get("time");
  let timeToDelay: number = queryParamTime ? +queryParamTime : 2000;

  // timeToDelay can only be 10,000 ms or smaller
  timeToDelay = timeToDelay > 10_000 ? 10_000 : timeToDelay;

  await new Promise((res) => {
    setTimeout(res, timeToDelay);
  });
  return NextResponse.json({ message: "hello world" });
}
