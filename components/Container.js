import Head from 'next/head'
import Script from 'next/script'

export default function Container(props) {
  return (
    <div>
      <Head>
        <title>Users CRUD</title>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/style.css" />
      </Head>
      <div className="content">
        <div className="container">
          <div className="table-responsive">{props.children}</div>
        </div>
      </div>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></Script>
      <Script
        src="https://kit.fontawesome.com/300bd3eb4a.js"
        crossorigin="anonymous"
      ></Script>
    </div>
  )
}
