import React from 'react';
import Head from 'next/head';
import { Helmet } from 'react-helmet';
import { Seo } from '../../src/generated/graphql';

interface IMeta {
  seo?: Seo | null;
}

export default function Meta({ seo }: IMeta) {
  return (
    <>
      <Head>
        <title>{seo?.title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link
          href='https://fonts.googleapis.com/css2?family=Karla:wght@400;700&family=Lora:wght@400;500;700&family=Open+Sans:wght@300;400;700;800&family=Roboto:wght@300;400;500;700&display=swap'
          rel='stylesheet'
          // @ts-ignore
          lazyload
        />
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
        <meta name='description' content={seo?.opengraphDescription || ''} />
        <meta property='og:image' content='/favicon.png' />
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=UA-180359002-1'
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'UA-180359002-1');`,
          }}
        />
      </Head>
      <Helmet
        htmlAttributes={{
          lang: seo?.locale || 'eng',
        }}
        title={seo?.title}
        meta={[
          {
            name: `description`,
            content: seo?.description,
          },
          {
            property: `og:title`,
            content: seo?.opengraphTitle,
          },
          {
            property: `og:description`,
            content: seo?.opengraphDescription,
          },
          {
            property: `og:type`,
            content: seo?.opengraphType,
          },
          {
            property: `og:url`,
            content: seo?.opengraphUrl,
          },
          {
            property: `og:site_name`,
            content: seo?.opengraphSiteName,
          },
          {
            property: `og:publisher`,
            content: seo?.opengraphPublisher,
          },
          {
            property: `og:datePublished`,
            content: seo?.opengraphPublishedTime,
          },
          {
            property: `og:dateModified`,
            content: seo?.opengraphModifiedTime,
          },
          {
            property: `og:author`,
            content: seo?.opengraphAuthor,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: seo?.opengraphAuthor,
          },
          {
            name: `twitter:title`,
            content: seo?.title,
          },
          {
            name: `twitter:description`,
            content: seo?.twitterDescription,
          },
          {
            name: `keywords`,
            content: seo?.focuskw,
          },
        ]}
      />
    </>
  );
}
