import React from 'react';
import Head from 'next/head';
import { Helmet } from 'react-helmet';
// import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants';

export default function Meta() {
  // { seo, allSettings }
  return (
    <>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='57x57'
          href='/favicon/apple-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='60x60'
          href='/favicon/apple-icon-60x60.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='/favicon/apple-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='/favicon/apple-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='/favicon/apple-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='/favicon/apple-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='/favicon/apple-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/favicon/apple-icon-152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-icon-180x180.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/favicon/android-icon-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href='/favicon/favicon-96x96.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicon/manifest.json' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
        <meta name='theme-color' content='#ffffff' />
        {/* <meta name='description' content={seo.opengraphDescription} /> */}
        <meta property='og:image' content='/favicon.png' />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-5BZ3MG5');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5BZ3MG5" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}
      </Head>
      {/* <Helmet
        htmlAttributes={{
          lang: allSettings.generalSettingsLanguage || 'eng',
        }}
        title={seo.title}
        meta={[
          {
            name: `description`,
            content: seo.metaDesc,
          },
          {
            property: `og:title`,
            content: seo.opengraphTitle,
          },
          {
            property: `og:description`,
            content: seo.opengraphDescription,
          },
          {
            property: `og:type`,
            content: seo.opengraphType,
          },
          {
            property: `og:url`,
            content: seo.opengraphUrl,
          },
          {
            property: `og:site_name`,
            content: seo.opengraphSiteName,
          },
          {
            property: `og:publisher`,
            content: seo.opengraphPublisher,
          },
          {
            property: `og:datePublished`,
            content: seo.opengraphPublishedTime,
          },
          {
            property: `og:dateModified`,
            content: seo.opengraphModifiedTime,
          },
          {
            property: `og:author`,
            content: seo.opengraphAuthor,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: seo.twitterTitle,
          },
          {
            name: `twitter:title`,
            content: seo.twitterTitle,
          },
          {
            name: `twitter:description`,
            content: seo.twitterDescription,
          },
          {
            name: `keywords`,
            content: seo.metaKeywords,
          },
          {
            name: `keywords`,
            content: seo.metaKeywords,
          },
          {
            name: `keywords`,
            content: seo.canonical,
          },
        ]}
      /> */}
    </>
  );
}
