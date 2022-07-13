import Head from "next/head";
import React from "react";
import Banner from "../HomePage/Banner";
import Product from "../HomePage/Product";

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Head>
          <title>{children ? children + " - ema-john" : "ema-john"}</title>
          <meta name="description" content="E-commerce Website" />
          <link rel="icon" href="/favicon.ico" />
          {/* <!-- JavaScript Bundle with Popper --> */}
        </Head>
      </div>
      <div>
        <Banner></Banner>
        <Product></Product>
      </div>
    </div>
  );
};

export default Layout;
