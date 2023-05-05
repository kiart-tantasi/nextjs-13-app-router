// simulating sending request
export async function getData(timeToWait: number): Promise<number> {
  "use server";
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.random());
    }, timeToWait);
  });
}
