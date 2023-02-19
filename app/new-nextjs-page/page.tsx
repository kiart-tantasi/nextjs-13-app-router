async function getDataMock() {
    const timeToWait = 2500
    return new Promise((resolve) => {
        setTimeout(() => { resolve('DATA MOCK') }, timeToWait)
    })
}

export default async function Page() {
    const fetchedData = await getDataMock()

    return <div><h1>This is app directory beta page !</h1><p>{`fetched data: ${fetchedData}`}</p></div>
}
