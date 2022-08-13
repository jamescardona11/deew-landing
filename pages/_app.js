import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Deew - Web3 Maker</title>
        <meta name="title" content="Deew - Web3 Maker" />
        <meta name="description" content="Create NFTs, Build smartcontracts, get web3 support." />
        <meta name="keywords" content="nft, smartcontracts, ethereum, solidity, solana" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_MAIN_URL} />
        <meta property="og:title" content="Deew - Web3 Maker" />
        <meta property="og:description" content="Create NFTs, Build smartcontracts, get web3 support." />
        <meta property="og:image" content={process.env.NEXT_PUBLIC_MAIN_URL + 'logo.png'} />

        <meta property="og:locale" content="id" />
        <meta property="og:image:alt" content="logo" />
        <meta property="og:image:type" content="png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={process.env.NEXT_PUBLIC_MAIN_URL} />
        <meta property="twitter:title" content="Deew - Web3 Maker" />
        <meta property="twitter:description" content="Create NFTs, Build smartcontracts, get web3 support." />
        <meta property="twitter:image" content={process.env.NEXT_PUBLIC_MAIN_URL + 'logo.png'} />
        <link rel="apple-touch-icon" sizes="57x57" href="favico/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="favico/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="favico/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="favico/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="favico/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="favico/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="favico/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="favico/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="favico/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favico/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="favico/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="favico/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favico/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
