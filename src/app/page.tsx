import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <article className="prose flex flex-col gap-2">
        <h1 className="text-center">Navigation</h1>
        <Link className="btn btn-block" href={'/basic'}>Basic</Link>
        <Link className="btn btn-block" href={'/select'}>Select</Link>
        <Link className="btn btn-block" href={'/with-validation'}>With Validation</Link>
        <Link className="btn btn-block" href={'/third-party-validation'}>Third Party Validation</Link>
        <Link className="btn btn-block" href={'/with-custom-component'}>With Custom Component</Link>
      </article>
    </main>
  )
}