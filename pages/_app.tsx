import "../styles/globals.css";
import Component from "react";



function MyApp({Component, pageProps } : any) {
    return (
            <>
            <Component {...pageProps} />
            </>
            );

}

export default MyApp;
