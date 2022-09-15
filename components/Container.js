import Head from 'next/head'

export default function Container(props) {
  return (
    <div>
      <Head>
        <title>Users CRUD</title>
      </Head>
      <div>
        { props.children }
      </div>
    </div>
  )
}
