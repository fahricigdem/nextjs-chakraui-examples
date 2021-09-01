import { Navbar } from './Navbar'
import { Footer } from './Footer'
import Head from 'next/head'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Fahri Cigdem</title>
                <meta property="og:title" content="Next.JS-Chakra App" key="title" />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}