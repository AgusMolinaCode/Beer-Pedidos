import '@/styles/globals.css'
import BeerProvider, { BeerContext } from '@/context/BeerProvider'

export default function App({ Component, pageProps }) {
  return (
    <BeerProvider>
      <BeerContext.Consumer>
        {(value) => (
          <Component {...pageProps} />
        )}
      </BeerContext.Consumer>
    </BeerProvider>
  )
}
