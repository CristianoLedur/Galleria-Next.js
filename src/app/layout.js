import './globals.css';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import FooterComponent from '../components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Galleria',
  description: 'Galleria feita em next.js',
}

export default function RootLayout({ children }) {

  
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
        name="description"
        content="Learn how to build a galleria website using Next.js"
        />
        <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
            metadata.title,
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={metadata.title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <html lang="en">
        <body className={inter.className}>
          <Header />
            <main className="container pb-4">{children}</main>
          <FooterComponent />
        </body>
      </html>
    </>
  )
}
