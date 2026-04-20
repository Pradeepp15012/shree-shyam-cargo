import { Helmet } from 'react-helmet-async';

export default function Seo({ title, description, path = '/' }) {
  const siteUrl = 'https://www.shreeshyamcargo.com';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${siteUrl}${path}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${siteUrl}${path}`} />
    </Helmet>
  );
}

