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
        <link rel="stylesheet" href="fonts/icomoon/style.css" />
        <link rel="stylesheet" href="css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/style.css" />
      </Head>
      <div className="content">
        <div className="container">
          <div className="table-responsive">{props.children}</div>
        </div>
      </div>
        <Script src="js/bootstrap.min.js"></Script>
        <Script
          src="https://kit.fontawesome.com/300bd3eb4a.js"
          crossorigin="anonymous"
        ></Script>
    </div>
  )
}
