import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/boxicons/css/boxicons.min.css'
import '../styles/css/theme.min.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
