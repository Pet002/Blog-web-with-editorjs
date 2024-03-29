import "../styles/globals.css";
import "../styles/globals.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <>
        <Head>
        <title>Create Next App</title>
        </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
