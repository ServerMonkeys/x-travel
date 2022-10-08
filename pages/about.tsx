import Link from 'next/link'

export default function about() {
  return (
    <>
      <h1>About Section</h1>
        <p>testing how this is going to work</p>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}