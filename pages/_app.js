import "../styles/globals.css";
import { SessionProvider } from "next-auth/react"
import Layout from "../components/Layout";
import Nav from "../components/Nav";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
        <Nav />
        <Component {...pageProps} />  
    </SessionProvider>
  )
}
