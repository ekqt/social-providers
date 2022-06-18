import "../styles/globals.scss";
import { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import Meta from "../components/Meta";

export default function App(props: AppProps) {
    const { Component, pageProps } = props;

    return (
        <>
            <Meta />
            <MantineProvider withGlobalStyles withNormalizeCSS>
                <main id='main'>
                    <Component {...pageProps} />
                </main>
            </MantineProvider>
        </>
    );
}
