import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    console.log(JSON.stringify(req));
    const paramsString: string | undefined = req.url.split("?")[1];
    const params: URLSearchParams = new URLSearchParams(paramsString);
    const queryParamTime: string | null = params.get("time");
    let timeToDelay: number = queryParamTime ? +queryParamTime : 2000;
    const MAX_TIME_ALLOWED = 10_000;
    timeToDelay =
      timeToDelay > MAX_TIME_ALLOWED ? MAX_TIME_ALLOWED : timeToDelay;
    await new Promise((res) => {
      setTimeout(res, timeToDelay);
    });
    return NextResponse.json({ message: "hello world" });
  } catch (e) {
    return NextResponse.json({ message: (e as Error).toString() });
  }
}
