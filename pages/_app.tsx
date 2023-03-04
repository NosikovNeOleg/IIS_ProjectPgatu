import "../styles/globals.css";
import Component from "react";
import { Router } from "next/router";



function MyApp({Component, pageProps } : any) {
    return (
            <>
            <Component {...pageProps} />
            </>
            );

}

export default MyApp;


