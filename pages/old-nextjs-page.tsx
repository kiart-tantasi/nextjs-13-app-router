import { GetServerSidePropsContext } from "next"
import { useEffect, useState } from "react"

export default function Page({ data: serverData }: { data: string }) {
    const [clientData, setClientData] = useState<string>('fetching...')
    async function getDataMock(): Promise<string> {
        const timeToWait = 2500
        return new Promise((resolve) => {
            setTimeout(() => { resolve('DATA MOCK') }, timeToWait)
        })
    }

    useEffect(() => {
        (async () => {
            setClientData(await getDataMock())
        })()
    }, [])

    return <div>
        <h1>This is nextjs 12 page</h1>
        <p>{`data fetched on server side: ${serverData}`}</p>
        <p>{`data fetched on client side: ${clientData}`}</p>
    </div>
}

export async function getServerSideProps(context: GetServerSidePropsContext) {

    new Promise((resolve) => {
        setTimeout(() => resolve, 2500)
    })

    return {
        props: {
            data: 'Data from server side'
        }
    }
}

// this code will not work in nextjs 12

// async function getDataMock() {
//     const timeToWait = 2500
//     return new Promise((resolve) => {
//         setTimeout(() => { resolve('DATA MOCK') }, timeToWait)
//     })
// }
// export default async function Page() {
//     const fetchedData = await getDataMock()

//     return <div><h1>This is app directory beta page !</h1><p>{`fetched data: ${fetchedData}`}</p></div>
// }
