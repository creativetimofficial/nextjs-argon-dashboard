import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <link
            rel="shortcut icon"
            href={require("assets/img/brand/favicon.ico")}
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href={require("assets/img/brand/apple-icon.png")}
          />
          {/* Extra details for Live View on GitHub Pages */}
          {/* Canonical SEO */}
          <link
            rel="canonical"
            href="https://www.creative-tim.com/product/nextjs-argon-dashboard"
          />

          {/*  Social tags      */}
          <meta
            name="keywords"
            content="creative tim, react dashboard, react css dashboard, web dashboard, reactstrap dashboard, reactstrap, css3 dashboard, reactstrap admin, argon dashboard reactstrap dashboard, frontend, responsive reactstrap dashboard, argon design, argon dashboard bootstrap 4 dashboard, nextjs dashboard, nextjs, nextjs admin, argon dashboard nextjs dashboard, server side render, responsive nextjs dashboard, nextjs design"
          />
          <meta
            name="description"
            content="Start your development with a Dashboard for NextJS, Bootstrap 4, React and Reactstrap. It is open source, free and it features many components that can help you create amazing websites."
          />

          {/* Schema.org markup for Google+ */}
          <meta
            itemprop="name"
            content="NextJS Argon Dashboard by Creative Tim"
          />
          <meta
            itemprop="description"
            content="Start your development with a Dashboard for NextJS, Bootstrap 4, React and Reactstrap. It is open source, free and it features many components that can help you create amazing websites."
          />

          <meta
            itemprop="image"
            content="https://s3.amazonaws.com/creativetim_bucket/products/346/opt_ad_nextjs_thumbnail.jpg"
          />

          {/* Twitter Card data */}
          <meta name="twitter:card" content="product" />
          <meta name="twitter:site" content="@creativetim" />
          <meta
            name="twitter:title"
            content="NextJS Argon Dashboard by Creative Tim"
          />

          <meta
            name="twitter:description"
            content="Start your development with a Dashboard for NextJS, Bootstrap 4, React and Reactstrap. It is open source, free and it features many components that can help you create amazing websites."
          />
          <meta name="twitter:creator" content="@creativetim" />
          <meta
            name="twitter:image"
            content="https://s3.amazonaws.com/creativetim_bucket/products/346/opt_ad_nextjs_thumbnail.jpg"
          />

          {/* Open Graph data */}
          <meta property="fb:app_id" content="655968634437471" />
          <meta
            property="og:title"
            content="NextJS Argon Dashboard by Creative Tim"
          />
          <meta property="og:type" content="article" />
          <meta
            property="og:url"
            content="http://demos.creative-tim.com/nextjs-argon-dashboard/admin/dashboard"
          />
          <meta
            property="og:image"
            content="https://s3.amazonaws.com/creativetim_bucket/products/346/opt_ad_nextjs_thumbnail.jpg"
          />
          <meta
            property="og:description"
            content="Start your development with a Dashboard for NextJS, Bootstrap 4, React and Reactstrap. It is open source, free and it features many components that can help you create amazing websites."
          />
          <meta property="og:site_name" content="Creative Tim" />
          {/* Fonts and icons */}
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
            rel="stylesheet"
          />
        </Head>
        <body>
          <div id="page-transition"></div>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
