export default {
  github: 'https://github.com/nicoglennon/primer',
  docsRepositoryBase: 'https://github.com/nicoglennon/primer/blob/main',
  titleSuffix: ' – Primer',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Primer</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Crypto 101
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="Your beginner's guide to crypto, web3 and the metaverse"
      />
      <meta name="og:description" content="Primer: Crypto 101" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="https://primer.vercel.app/intro.jpeg"
      />
      <meta name="twitter:site:domain" content="primer.vercel.app" />
      <meta name="twitter:url" content="https://primer.vercel.app" />
      <meta name="og:title" content="Primer: Crypto 101" />
      <meta name="og:image" content="https://primer.vercel.app/intro.jpeg" />
    </>
  ),
  search: false,
  prevLinks: false,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: (
    <>
      Made by{' '}
      <a href="https://twitter.com/nicoglennon" target="_blank">
        Nico
      </a>{' '}
      in 🗽 © {new Date().getFullYear()}
    </>
  ),
  unstable_faviconGlyph: '👽',
}
