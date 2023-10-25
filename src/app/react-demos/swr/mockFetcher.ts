let fetchCount = 0;

export const fetcher = async () => {
  return new Promise<{
    name: string;
  }>((resolve) => {
    fetchCount++;
    /**
     *  this is why using tempFetchCount other than directly using fetchCount
     *
     *  1 using tempFetchCount:
     *
     *  input:
     *   fetcher();
     *   fetcher();
     *  out:
     *   mock fetch start ... 1
     *   mock fetch start ... 2
     *   mock fetch end ... 1
     *   mock fetch end ... 2
     *
     *   2 using fetchCount:
     *  input:
     *   fetcher();
     *   fetcher();
     *  out:
     *   mock fetch start ... 1
     *   mock fetch start ... 2
     *   mock fetch end ... 2
     *   mock fetch end ... 2
     *
     */
    let tempFetchCount = fetchCount;
    console.log('mock fetch start ...', tempFetchCount)
    setTimeout(() => {
      resolve({
        name: 'test swr fetcher data'
      })
      console.log('mock fetch end ...', tempFetchCount)
    }, 2000)
  })
}