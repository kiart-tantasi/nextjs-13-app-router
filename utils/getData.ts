// simulating sending request
export async function getData(timeToWait: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("MOCK");
    }, timeToWait);
  });
}
