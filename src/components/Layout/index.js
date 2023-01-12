import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { node } from 'prop-types';
import '@assets/css/icomoon.css';
import '@assets/css/bootstrap.css';
import '@assets/css/style.css';

function MainLayout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>Dai ❤️ Santi</title>
        {/* font and SEO tags */}
        <meta property="og:title" content="La boda de Dai y Santi" />
        <meta property="og:site_name" content="La boda de Dai y Santi" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="La boda de Dai y Santi" />

        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:400,300,600,400italic,700"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
      </Helmet>
      <div id="page">{children}</div>
    </Fragment>
  );
}

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
