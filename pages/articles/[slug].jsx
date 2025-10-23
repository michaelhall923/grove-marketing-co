// pages/blog/[slug].jsx
import Container from '@/components/Container';
import HeaderFix from '@/components/HeaderFix';
import { builder } from '@builder.io/react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';

// Public key is fine to ship
builder.init('04a66a34a825475f879a3a1be1673b31');

// Client-only Builder renderer: avoids SSR/CSR mismatches entirely
const ClientOnlyBuilder = dynamic(
  () =>
    Promise.resolve(function ClientOnlyBuilderInner({ article }) {
      // Import inside to keep the server from rendering it
      const { BuilderComponent } = require('@builder.io/react');
      return (
        <BuilderComponent
          model="article"
          content={article}
          options={{ enrich: true }}
          key={article?.id || 'article'}
        />
      );
    }),
  { ssr: false },
);

function getImageSrc(src) {
  return typeof src === 'string' ? src : src?.src || '';
}

export default function ArticlePage({ article }) {
  if (!article) {
    return (
      <>
        <Head>
          <meta key="robots" name="robots" content="noindex" />
          <title>Not Found</title>
        </Head>
        <div
          className="min-h-[100vh]"
          style={{ background: 'linear-gradient(to bottom, #297073, rgb(20, 52, 52))' }}
        >
          <HeaderFix />
          <Container maxWidth={1000}>
            <main className="px-4 py-16">
              <h1>404 — Article not found</h1>
              <p>Sorry, we couldn’t find that article.</p>
            </main>
          </Container>
        </div>
      </>
    );
  }

  const title = article?.data?.title || '';
  const description = article?.data?.excerpt || '';
  const hero = getImageSrc(article?.data?.image);

  return (
    <div
      className="min-h-[100vh]"
      style={{ background: 'linear-gradient(to bottom, #297073, rgb(20, 52, 52))' }}
    >
      <Head>
        <title>{title ? `${title} | Grove Marketing Co.` : 'Article | Grove Marketing Co.'}</title>
        <meta key="description" name="description" content={description} />

        {/* Open Graph */}
        <meta key="og:type" property="og:type" content="article" />
        <meta key="og:title" property="og:title" content={title} />
        <meta key="og:description" property="og:description" content={description} />
        {hero && <meta key="og:image" property="og:image" content={hero} />}

        {/* Twitter */}
        <meta key="tw:card" name="twitter:card" content="summary_large_image" />
        <meta key="tw:title" name="twitter:title" content={title} />
        <meta key="tw:desc" name="twitter:description" content={description} />
        {hero && <meta key="tw:image" name="twitter:image" content={hero} />}
      </Head>

      <HeaderFix />
      <Container maxWidth={1000}>
        <main className="article">
          {hero && (
            <Image
              src={hero}
              width={1920}
              height={1080}
              alt={title || 'Article hero'}
              className="mb-8 rounded-xl"
              priority
            />
          )}
          <h1 className="text-4xl sm:text-6xl">{title}</h1>

          {/* Client-only render prevents hydration errors for tricky entries like `digital-marketing-brevard` */}
          <ClientOnlyBuilder article={article} />
        </main>
      </Container>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const urlPath = `/blog/${params.slug}`;

  const article =
    (await builder
      .get('article', {
        query: { 'data.slug': params.slug },
        userAttributes: { urlPath }, // keep decisions consistent
        options: { enrich: true }, // modern replacement for includeRefs
      })
      .toPromise()) || null;

  return {
    props: { article },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
