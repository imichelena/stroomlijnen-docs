import React from 'react';
import BlogPostPage from '@theme-original/BlogPostPage';
import type BlogPostPageType from '@theme/BlogPostPage';
import type {WrapperProps} from '@docusaurus/types';
import Head from '@docusaurus/Head';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';

type Props = WrapperProps<typeof BlogPostPageType>;

function BlogPostStructuredData(): React.JSX.Element {
  const {metadata} = useBlogPost();
  const {title, description, date, authors, permalink} = metadata;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    datePublished: date,
    url: `https://docs.stroomlijnen.nl${permalink}`,
    author: authors.map((a) => ({
      '@type': 'Person',
      name: a.name,
      url: a.url,
    })),
    publisher: {
      '@type': 'Organization',
      name: 'Stroomlijnen B.V.',
      url: 'https://stroomlijnen.nu',
      logo: {
        '@type': 'ImageObject',
        url: 'https://docs.stroomlijnen.nl/img/logo.svg',
      },
    },
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Head>
  );
}

export default function BlogPostPageWrapper(props: Props): React.JSX.Element {
  return (
    <>
      <BlogPostStructuredData />
      <BlogPostPage {...props} />
    </>
  );
}
