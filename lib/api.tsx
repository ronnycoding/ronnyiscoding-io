const GRAPHCMS_API: string = process.env.GRAPHCMS_API || '';
const FRONT_PAGE_SLUG: string = process.env.FRONT_PAGE_SLUG || '';

async function fetchAPI(
  query: string,
  { variables }: { variables: any } = { variables: {} }
) {
  const headers: { 'Content-Type': string; Authorization: string } = {
    'Content-Type': 'application/json',
    Authorization: '',
  };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  const res = await fetch(GRAPHCMS_API, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getFrontPageContent() {
  if (!FRONT_PAGE_SLUG)
    throw new Error('you should set FRONT_PAGE_SLUG env variable');

  const data = await fetchAPI(
    `
    query getFrontPageData($slug: String!) {
        url(where: {slug: $slug}) {
          slug
          page {
            imageTexts {
              id
              image {
                width
                height
                url
              }
              title
              text
            }
            seo {
              title
              description
              focuskw
              canonical
              locale
              opengraphUrl
              twitterImage {
                url
              }
              twitterDescription
              opengraphType
              opengraphTitle
              opengraphSiteName
              opengraphPublisher
              opengraphDescription
              opengraphPublishedTime
              opengraphModifiedTime
              opengraphAuthor
            }
            pageTitle
            introSection {
              smallParagraph
              bigBoldParagraph
              bigParagraph
              briefDescription
            }
          }
        }
        projectCategories {
          id
          title
          projects {
            id
            featureImage {
              width
              height
              url
            }
            title
            description
            date
            isOpenSource
            url
          }
        }
      }
    `,
    {
      variables: {
        slug: FRONT_PAGE_SLUG,
      },
    }
  );

  return data;
}
