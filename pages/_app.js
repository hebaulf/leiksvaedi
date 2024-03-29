import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '../prismicio'
import '../styles/globals.css'
import Header from '../components/Header'

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider 
      linkResolver={linkResolver} 
      internalLinkComponent={({ href, locale, children, ...props }) => (
        <Link href={href} locale={locale}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
      <Header />
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  )
}
