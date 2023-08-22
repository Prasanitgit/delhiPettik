import '../styles/globals.css'
import { SnackbarProvider } from "notistack";
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })
 
export default function MyApp({ Component, pageProps }) {
  return (
    <SnackbarProvider
    maxSnack={1}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    preventDuplicate
   >
    <main className={montserrat.className}>
      <Component {...pageProps} />
    </main>
    </SnackbarProvider>
  )
}