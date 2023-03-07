import "../styles/globals.css";



function MyApp({Component, pageProps } : any) {
    return (
            <>
    
            <Component {...pageProps}/>

            <style jsx global>
                {`
                html {
                    background: rgba(203, 214, 255, 1);
                }
                `}
               
            </style>

            </>
            );

}

export default MyApp;


