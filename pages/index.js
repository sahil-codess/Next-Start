import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const handleClick = () => {
    console.log('Placed your oder')
    router.push('/products')
  }

  return (
    <>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <h1>Homepage</h1>
      <Link href='/blog'>
        Blog
      </Link>
      <Link href='/products'><button>products</button></Link>
      <button onClick={handleClick}>Place Order</button>

      <Link href='/posts'><button>Posts</button></Link>

    </>
  )
}
