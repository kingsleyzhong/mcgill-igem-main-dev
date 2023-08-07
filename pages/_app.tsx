// import '../styles/globals.css'
// import type { AppProps } from 'next/app'
// import { useEffect } from 'react';

// function MyApp({ Component, pageProps }: AppProps) {
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//             const loader = document.getElementById('globalLoader');
//         if (loader)
//             loader.style.display = 'none';
//     }
// }, []);
//   return <Component {...pageProps} />
// }

// export default MyApp


import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Loading from '../components/common/loading';
import PageLoader from 'next/dist/client/page-loader';

const MyApp = ({
  Component, 
  pageProps,
}: AppProps) => {    
    const router = useRouter();
    const [pageLoading, setPageLoading] =useState<boolean>(false);
    useEffect(() => {
        const handleStart = () => { setPageLoading(true); };
        const handleComplete = () => { setPageLoading(false); };
    
        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);
      }, [router]);

      

      useEffect(() => {
        window.addEventListener('load', () => {  
          console.log("page is loaded")  
        })
    },[]);

return (
  <div>
    {pageLoading ? <Loading/> :  <Component {...pageProps} />}
  </div>

)
}

export default MyApp